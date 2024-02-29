// import { Middleware } from "@reduxjs/toolkit";

// interface DelayedAction {
//     meta?: {
//       delay?: number;
//     };
//   }
  
// export const delayAction: Middleware = store => next  => action => {
//     if (action.meta && action.meta.delay) {
//       const delay = action.meta.delay;
//       setTimeout(() => {
//         next(action);
//       }, delay);
//     } else {
//       next(action);
//     }
//   };
  
