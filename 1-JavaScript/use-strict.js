'use strict';

    // 1 - Referenciar variáveis não declaradas;
    /*function foo() {
      //'use strict';
      variavelMalDigitada=3;
    }
    foo(); //ReferenceError (Strict Mode is enforced for function foo)
    */
    // 2 - Tentar escrever em propriedades somente leitura
    /*NaN = 'Not a Number';*/

    /*var pessoa = {};
    Object.defineProperty(pessoa, "cpf", {
      value: '27522831563',
      writable: false
    });
    pessoa.cpf = 'novo cpf';

    // 3 - Tentar extender objetos não-extensíveis
    var objJogoFixo = {};
    Object.preventExtensions(objJogoFixo);
    objJogoFixo.nome = 'Banjo Kazooie';

    // 4 - Tentar deletar propriedades "não-deletáveis"
    delete Object.prototype;
    
    // 5 - Propriedades duplicadas. O último campo declarado é o que mantém o valor.
    
*/
    // 6 - Nomes de parâmetros duplicados.
    // O último parâmetro informado é o que mantém o valor.
    /*
*/  
    var ordenaJogos = function(j1, j2, j2) {
      'use strict';
      return [ j1, j2, j2 ];
    };  
    var jogo = { nome: 'The Witcher 3', nome: 'TW3' };

    // 7 - Números em Base 8 (Octal) não estão na especificação mas browsers suportam
    var somar = function() {
      'use strict';
      return 015 + 1;
    };