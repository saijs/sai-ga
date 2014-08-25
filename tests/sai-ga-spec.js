var expect = require('expect.js');
var Image = require('imagic');
var Url = require('url');


describe('sai-ga', function() {

  it('normal usage', function(done) {

    require.async("../sea-modules/sai/3.0.0/seer-sai.js?nowrap", function(){
      require.async("../sea-modules/sai/3.0.0/seer-jsniffer.js?nowrap", function(){


        seajs.use(["https://www.google-analytics.com/analytics.js", 'sai', '../index'], function(GA, Sai, saiGa) {

          ga('create', 'UA-50522089-2', 'spm documentation');
          //ga('send', 'pageview');

          Image.on("fetch", function(src){
            var url = new Url(src);

            expect(url.getParam("t")).to.equal("exception");
            expect(url.getParam("exd")).to.equal("ex");
            expect(url.getParam("exf")).to.equal("0");

            Image.off("fetch");
            done();
          });

          Sai.error(new Error("ex"));

        });


      });
    });
  });

  it('try/catch and Sai.error(ex)', function(done) {
    Image.on("fetch", function(src){
      var url = new Url(src);

      expect(url.getParam("t")).to.equal("exception");
      expect(url.getParam("exd")).to.equal("throw new error");
      expect(url.getParam("exf")).to.equal("0");

      Image.off("fetch");
      done();
    });

    try {
      throw new Error("throw new error");
    } catch (ex) {
      Sai.error(ex);
    }
  });

  // TODO: 未捕获的异常。但是无法写测试单元测试用例。

});
