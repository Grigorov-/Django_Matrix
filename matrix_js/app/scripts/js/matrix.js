

$(document).ready(function(){

    $("#horizontal-slider").change(function() {
        var slider = $('#horizontal-slider')
        var col = $('.col-xs-1')
        var horizontal = new Array(eval(slider.val()))

        col.attr('ng-repeat', horizontal)
        console.log("horizontal " + slider.val()); 
        console.log(col.attr('ng-repeat'))

        // jQuery('<div/>', {
        //     id: 'foo',
        //     href: 'http://google.com',
        //     title: 'Become a Googler',
        //     rel: 'external',
        //     text: 'Go to Google!'
        // }).appendTo('#mySelector')
        var mainDiv = $('<div/>',{
            class: 'ng-scope'
        })
        var vert = $('<input/>', {
            type: 'range',
            class: 'slider',
            id: 'horizontal-slider',
            value: 2,
            min: 1,
            max: 10,
        })
        var horiz = $('<input/>', {
            type: 'range',
            class: 'slider',
            id: 'vertical-slider',
            orient:'vertical',
            value: 10,
            min: 1,
            max: 10,
        })
        var form = $('<form>')

        mainDiv.attr('ng-app', 'myApp')
        var div = $('<div/>',{
            class: 'col-xs-1 row-no-padding'
        })
        div.attr('ng-repeat', 'n in [1,2,3,1] track by $index')
        var input = $('<input/>',{
            type: 'text',
            class: 'form-control row-no-padding',
        })
        input.attr('ng-repeat', 'n in range(7) track by $index')
        mainDiv.append(horiz)
        mainDiv.append(vert)
        div.append(input)
        form.append(div)
        
        mainDiv.append(form)
        $('#matrix_wrapper').replaceWith(mainDiv)


    });

    $("#vertical-slider").change(function() {
        var slider = $('#vertical-slider')
        console.log("vertical " + eval(11 - slider.val())); 
    });
});