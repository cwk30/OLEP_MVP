$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : '<i class="fas fa-arrow-left"></i>',
            next : '<i class="fas fa-arrow-right"></i>',
            finish : '<i class="fas fa-check"></i>',
            current : ''
        },
        onFinished: function (event, currentIndex)
        {
            var form = $(this);

            // Submit form input

            $(".form-register").submit();
        }
    })
});
