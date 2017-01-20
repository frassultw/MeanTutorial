'use strict';

describe('MainCtrl', function(){
    var postsMock;

    beforeEach(function(){
        postsMock = {
            posts: [],
            getAll: sinon.spy(),
            create: sinon.spy(),
            upvote: sinon.spy(),
            get: sinon.spy(),
            addComment: sinon.spy(),
        };

        module('flapperNews');
        
    });

    describe('test', function(){
        it('should print Hello World!', inject(function($controller){
            var scope = {};
            var mainCtrl = $controller('MainCtrl', {
                $scope: scope
            });

            scope.test.should.equal('Hello World!');
        }));
    });

    describe('addBlankPost()', function(){
        it('should not add a post without a title', inject(function($controller){
            var scope = {};
            var mainCtrl = $controller('MainCtrl', {
                $scope: scope,
                posts: postsMock
            })

            scope.addPost();

            expect(postsMock.create.should.have.callCount(0));
        }));
    });

     describe('addPost()', function(){
        it('should add a post', inject(function($controller){
            var scope = {};
            var mainCtrl = $controller('MainCtrl', {
                $scope: scope,
                posts: postsMock
            })
            scope.title = 'Test post to add';
            
            scope.addPost();
            expect(postsMock.create.should.have.callCount(1));
        }));
    });

    describe('addPost()', function(){
        it('should add posts', inject(function($controller, $httpBackend){
            var scope = {};
            var post = { title:'Test Post', link: 'http://test.com'};
            $httpBackend
                .when('POST', '/posts')
                .respond(
                    post
                );
            $httpBackend    
                .when('GET', '/posts')
                .respond(
                    200, {}
                );
            var mainCtrl = $controller('MainCtrl', {
                $scope: scope
            });

            $httpBackend.flush();

            scope.title = "Test Post";
            expect(scope.posts).to.be.empty;

            scope.addPost();

            $httpBackend.flush();

            scope.posts.should.contain(post);

        }));
    });

    describe('upvotePost()', function(){
        it('should increment a posts upvotes by 1', inject(function($controller){
            var scope = {};
            var post = { title:'Test Post', link: 'http://test.com'};

            var mainCtrl = $controller('MainCtrl', {
                $scope: scope,
                posts: postsMock
            });
            
            scope.incrementUpvotes(post);
            
            expect(postsMock.upvote.should.have.callCount(1));
            
        }));
    });
});

