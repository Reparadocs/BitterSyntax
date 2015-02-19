$(document).ready(function(){
        jQuery('.targetDiv').hide()
        jQuery('.showHide').click(function(){
              jQuery('#div'+$(this).attr('target')).toggle();
        });
});
