/**
 * BairesDev NodeJS Bootcamp level 6.
 * Level 8 - Final Project.
 * 
 * @author  Rodrigo Mady
 * @project NodeJS Bootcamp
 */

module.exports = {
    formate: 'A3',
    orientation: 'portrait',
    border: '10mm',
    header: {
        height: '10mm',
        contents: '<h4 style="font-size:10;font-weight:800;text-align:left;">BairesDev NodeJS Bootcamp Report</h4>'
    },
    footer: {
        height: '13mm',
        contents: {
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', 
            last: 'Last Page'
        }
    }
}