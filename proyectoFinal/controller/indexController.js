let buzos = require ("../data/data");
const { json } = require ('express') 



let indexController = { 
    index : function(req, res) {
        return res.render ('index', {buzos_buzos: buzos.lista})
    },

    search : function(req, res) {
        let criterio = req.query.search
        let resultados = [] 

      
    
        // for(let i=0; i<result.length; i ++) {

            if (!criterio) { 

            resultados = buzos.lista    
    
        },
        
    //     else if (buzos.lista[i].marca.toLowerCase().includes(search.toLowerCase()) || buzos.lista[i].modelo.toLowerCase().includes(search.toLowerCase())) 
                           
    //             result.push(buzos.lista[i]    
        
    //     else 

    //     return res.render('search', {result: resultados})

    // }

    
};


 module.exports = indexController;
    