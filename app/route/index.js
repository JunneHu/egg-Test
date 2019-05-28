exports.route = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.resources('user', '/api/v1/user', app.controller.user);
    router.resources('subject', '/api/v1/subject', app.controller.subject);
    router.resources('category', '/api/v1/category', app.controller.category);
    router.resources('category2', '/api/v1/category2', app.controller.category2);
    router.resources('chapter', '/api/v1/chapter', app.controller.chapter);
    router.resources('section', '/api/v1/section', app.controller.section);
    router.resources('topic', '/api/v1/topic', app.controller.topic);
    router.resources('test', '/api/v1/test', app.controller.test);
    router.resources('article', '/api/v1/article', app.controller.article);
    router.resources('basicInfo', '/api/v1/basicInfo', app.controller.basicInfo);
    router.resources('order', '/api/v1/order', app.controller.order);
    router.resources('error', '/api/v1/error', app.controller.error);
    router.resources('collection', '/api/v1/collection', app.controller.collection);
    
}