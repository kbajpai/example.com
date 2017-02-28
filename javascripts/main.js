var oFunctions = {
    add: function(x, y) {
        console.log("Add");
    },
    subtract: function(x, y) {
        console.log("subtract");
    },
    foo: function(x, y, z) {
        console.log("foo");
    },
    doSomethingComplicated: function(x) {
        console.log("doSomethingComplicated");
    }
};

function generateSubExpression(fname, args, subExpr) {
    var retVal = '<div class="sub-expr column">';

    retVal += '<div class="ui button">' + fname + '&nbsp;</div>';

    console.log(subExpr);

    if(typeof subExpr !== 'undefined') {
        retVal += '<div style="border: 1px solid black; display: inline-block; margin-top: 1em; margin-bottom: 1em;">' + subExpr.html() + '</div>';
        args--;        
    }

    for(var i = 0; i < args; i++) {
        retVal += '<input type="text">&nbsp;';
    }

    return retVal;

}

$(document).ready(function() {
    var funcList = ["add", "subtract", "foo", "doSomethingComplicated"];

    for (var i = funcList.length - 1; i >= 0; i--) {
        $("#divFuncList").append('<div class="four wide column"><div class="ui button draggable-func" data-val="'+ oFunctions[funcList[i]].length +'" data-action="'+ oFunctions[funcList[i]].name +'">' + oFunctions[funcList[i]].name + '</div></div>');
    }

    $(".draggable-func").draggable({
        revert: 'valid'
    });

    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        var axn = $(ui.draggable).attr("data-action");
        var val = $(ui.draggable).attr("data-val");

        console.log($(this).find(".sub-expr"));

        if($(this).find(".sub-expr").length > 0) {
            $(this)
              .addClass( "ui-state-highlight" )
              .find("#mainExpr")
                .html(generateSubExpression(axn, val, $(this).find(".sub-expr")));
        } else {
            $(this)
              .addClass( "ui-state-highlight" )
              .find("#mainExpr")
                .html(generateSubExpression(axn, val));
        }
      }
    });
});