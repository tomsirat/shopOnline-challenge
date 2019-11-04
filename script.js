
var GET_PARAM = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    // $('.elementscatalogue').infiniteScroll({
    //     // options
    //     path: '.pagination__next',
    //     append: '.product',
    //     history: false,
    // });

    /****TOPVENTE */
    $('.topventeimage1').attr('src', catalog[1].thumb)
    $('.topventename1').html(catalog[1].name)
    $('.topventedesc1').html(catalog[1].description)
    $('.topventeprice1').html('Prix: ' + catalog[1].price + '€')


    $('.topventeimage2').attr('src', catalog[2].thumb)
    $('.topventename2').html(catalog[2].name)
    $('.topventedesc2').html(catalog[2].description)
    $('.topventeprice2').html('Prix: ' + catalog[2].price + '€')

    $('.topventeimage3').attr('src', catalog[3].thumb)
    $('.topventename3').html(catalog[3].name)
    $('.topventedesc3').html(catalog[3].description)
    $('.topventeprice3').html('Prix: ' + catalog[3].price + '€')



    /********RANDOM PRODUCT HOMEPAGE */
    for (i = 0; i < 6; i++) {
        var rdmNumber = Math.floor(Math.random() * catalog.length)
        var divColCat1 = $("<div class='col-lg-4 col-md-6 col-sm-12 '></div>")
        $('.randomproduct').append(divColCat1)
        var linkDivCat1 = $('<a href="fichesprod.html?product_id=' + rdmNumber + '" class="cardlink"></a>')
        divColCat1.append(linkDivCat1)
        var divCardCat1 = $('<div class="card"></div>')
        linkDivCat1.append(divCardCat1)
        var thumbCardCat1 = $('<img src="' + catalog[rdmNumber].thumb + ' " class="card-img-top" alt="...">')
        divCardCat1.append(thumbCardCat1)
        var divCardBody1 = $('<div class="card-body"></div')
        divCardCat1.append(divCardBody1)
        var specProduct1 = $('<h5 class="card-title text-center"> ' + catalog[rdmNumber].name + '</h5><p> ' + catalog[rdmNumber].description.substr(0, 150) + '...</p><div class="text-center">Quantité: ' + catalog[rdmNumber].quantity +
            '</div "> ' +'<div class="text-center">'+ catalog[rdmNumber].price + '€</div>'+'<button class="produit' + i + '">Bouton</button>')
        divCardBody1.append(specProduct1)


    }

    /***Catalogue */


    for (i = 0; i < catalog.length; i++) {

        var divColCat = $("<div class='col-lg-4 col-md-6 col-sm-12 '> </div>")
        $('.elementscatalogue').append(divColCat)
        var linkDivCat = $('<a href="fichesprod.html?product_id=' + i + '" class="cardlink"></a>')
        divColCat.append(linkDivCat)
        var divCardCat = $('<div class="card"></div>')
        linkDivCat.append(divCardCat)
        var thumbCardCat = $('<img src="' + catalog[i].thumb + ' " class="card-img-top" alt="...">')
        divCardCat.append(thumbCardCat)
        var divCardBody = $('<div class="card-body"></div')
        divCardCat.append(divCardBody)
        var specProduct = $('<h5 class="card-title text-center"> ' + catalog[i].name + '</h5><p> ' + catalog[i].description.substr(0, 150) + '...</p><div class="text-center">Quantité: ' + catalog[i].quantity +
            '</div "> ' +'<div class="text-center">'+ catalog[i].price + '€</div>'+'<button class="produit' + i + '">Bouton</button>')
        divCardBody.append(specProduct)

    }
    /********FICHE PRODUIT */
    var getPar = GET_PARAM("product_id")
    if (getPar) {
        $('.ficheprodimg').attr('src', catalog[getPar].thumb)
        $('.ficheprodname').html(catalog[getPar].name)
        $('.ficheproddesc').html(catalog[getPar].description)
        $('.ficheprodprice').html('Prix: ' + catalog[getPar].price + '€')
        $('.ficheprodquant').html('Quantité: ' + catalog[getPar].quantity)
    }



















})