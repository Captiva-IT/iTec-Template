var msgIcon = function (cell, formatterParams) {
    return cell.getValue() + ' <a href="#"data-toggle="modal" data-target="#modal"><i class="far fa-envelope"></i></a>';
};

var badge = function (cell, formatterParams, onRendered) {
    var result;

    switch (cell.getValue()) {
        case 'Marketing':
            result = "badge-secondary";
            break;
        case 'Hub':
            result = "badge-primary";
            break;
        default:
            result = "";
    }
    return '<span class="badge ' + result + '">' + cell.getValue() + '</span>';
};

$(function () {
    $('[data-toggle="popover"]').popover()
})