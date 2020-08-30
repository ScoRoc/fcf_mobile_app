export default {
  // setWods: async (globalState, dispatch, { wods: _wods }) => {
  //   const wods = _wods.reduce((allWods, wod) => {
  //     allWods[wod._id] = wod;
  //     return allWods;
  //   }, {});
  //   const newWodsState = {
  //     ...globalState.wodsState,
  //     data: {
  //       ...globalState.wodsState.data,
  //       wods,
  //     },
  //     // direction: direction || globalState.wods.direction,
  //   };
  //   await dispatch.setCacheAt({ data: { ...globalState.cache.wods, ...wods }, key: 'wods' });
  //   return { wodsState: newWodsState };
  // },
};
