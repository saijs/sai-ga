# Demo

---

<script src="../sea-modules/sai/3.0.0/seer-sai.js?nowrap"></script>
<script src="../sea-modules/sai/3.0.0/seer-jsniffer.js?nowrap"></script>

<script>
if (!window.ga) {
  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-50522089-2', 'spm documentation');
  ga('send', 'pageview');
}
</script>

## Normal usage

````javascript
seajs.use(['sai', 'index'], function(Sai, saiGa) {

  Sai.error(new Error("ex"));

});
````
