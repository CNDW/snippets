//Snippet for simulating a long request
fetch: function(){
    var deffered = new $.Deferred;
    this.set( TEMP_SWITCHSTATE_DATA );
    window.setTimeout(function(){
      deffered.resolve()
    }, 5000);
    return deffered.promise();
  }