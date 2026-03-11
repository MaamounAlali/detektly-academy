/* =============================================
   Search Visibility Path — Progress Tracking
   ============================================= */

const ProgressTracker = (() => {
  const STORAGE_KEY = 'svp-progress';

  const defaultState = {
    completedLessons: {},
    pathProgress: {},
    achievements: [],
    streak: { current: 0, lastDate: null, best: 0 },
    startDate: null,
    userName: ''
  };

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return { ...defaultState, ...saved };
    } catch {
      return { ...defaultState };
    }
  }

  function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getState() {
    return load();
  }

  function completeLesson(pathId, lessonId) {
    const state = load();
    const key = `${pathId}-${lessonId}`;
    state.completedLessons[key] = true;

    // Update path progress
    if (!state.pathProgress[pathId]) state.pathProgress[pathId] = { completed: 0, total: 0 };

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    if (state.streak.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (state.streak.lastDate === yesterday) {
        state.streak.current++;
      } else {
        state.streak.current = 1;
      }
      state.streak.lastDate = today;
      state.streak.best = Math.max(state.streak.best, state.streak.current);
    }

    if (!state.startDate) state.startDate = today;

    save(state);
    checkAchievements(state);
    return state;
  }

  function uncompleteLesson(pathId, lessonId) {
    const state = load();
    const key = `${pathId}-${lessonId}`;
    delete state.completedLessons[key];
    save(state);
    return state;
  }

  function isLessonCompleted(pathId, lessonId) {
    const state = load();
    return !!state.completedLessons[`${pathId}-${lessonId}`];
  }

  function getPathProgress(pathId, totalLessons) {
    const state = load();
    let completed = 0;
    for (let i = 1; i <= totalLessons; i++) {
      if (state.completedLessons[`${pathId}-${i}`]) completed++;
    }
    return { completed, total: totalLessons, percent: Math.round((completed / totalLessons) * 100) };
  }

  function getTotalProgress(paths) {
    const state = load();
    let totalCompleted = 0;
    let totalLessons = 0;
    paths.forEach(p => {
      totalLessons += p.total;
      for (let i = 1; i <= p.total; i++) {
        if (state.completedLessons[`${p.id}-${i}`]) totalCompleted++;
      }
    });
    return {
      completed: totalCompleted,
      total: totalLessons,
      percent: totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0
    };
  }

  function getStreak() {
    const state = load();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (state.streak.lastDate === today || state.streak.lastDate === yesterday) {
      return state.streak;
    }
    return { current: 0, lastDate: state.streak.lastDate, best: state.streak.best };
  }

  function checkAchievements(state) {
    const count = Object.keys(state.completedLessons).length;
    const achievements = [];
    if (count >= 1) achievements.push({ id: 'first-step', title: 'الخطوة الأولى', icon: '🚀' });
    if (count >= 10) achievements.push({ id: 'explorer', title: 'مستكشف', icon: '🔍' });
    if (count >= 28) achievements.push({ id: 'foundation', title: 'أساس متين', icon: '🏗️' });
    if (count >= 42) achievements.push({ id: 'dedicated', title: 'مثابر', icon: '💪' });
    if (count >= 70) achievements.push({ id: 'advanced', title: 'متقدم', icon: '⚡' });
    if (state.streak.best >= 7) achievements.push({ id: 'week-streak', title: 'أسبوع متواصل', icon: '🔥' });
    if (state.streak.best >= 30) achievements.push({ id: 'month-streak', title: 'شهر متواصل', icon: '🏆' });
    state.achievements = achievements;
    save(state);
    return achievements;
  }

  function getAchievements() {
    const state = load();
    return checkAchievements(state);
  }

  function resetProgress() {
    if (confirm('سيتم حذف كل التقدم والإنجازات. هل تريد المتابعة؟')) {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    }
    return false;
  }

  function setUserName(name) {
    const state = load();
    state.userName = name;
    save(state);
  }

  function getUserName() {
    return load().userName;
  }

  return {
    getState, completeLesson, uncompleteLesson, isLessonCompleted,
    getPathProgress, getTotalProgress, getStreak, getAchievements,
    resetProgress, setUserName, getUserName
  };
})();
