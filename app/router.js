'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/apiVersion', controller.home.index);
  router.get('/gatherStatus', controller.home.gatherStatus);
  router.get('/storeTanksgg/:ver', controller.home.storeTanksgg);
  router.get('/manual', controller.home.manualGather);
  router.get('/preData', controller.home.preData);
  router.get('/tankList', controller.home.tankList);
  router.get('/history', controller.home.singleTankHistory);

  router.get('/commentList', controller.home.getComments);
  router.post('/addComment', controller.home.addComment);
};
