// category selection
function showAll() {
    $("div[class*=catFilter]").fadeIn();
}

function hideAll() {
    $("div[class*='catFilter']").fadeOut();
}

function categorySelect (category) {
    switch (category) {
        case 1:
            hideAll();
            $("div[class*='catFilterWhiteWine']").fadeIn();
            break;
        case 2:
            hideAll();
            $("div[class*='catFilterRedWine']").fadeIn();
            break;
        case 3:
            hideAll();
            $("div[class*='catFilterChampagne']").fadeIn();
            break;
        case 4:
            hideAll();
            $("div[class*='catFilterSparkling']").fadeIn();
            break;
        case 5:
            hideAll();
            $("div[class*='catFilterWhiskey']").fadeIn();
            break;
    }
}