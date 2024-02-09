/* eslint-disable */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === "object") {
    // Node.js
    module.exports = factory();
  } else {
    // Browser
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
})(this, function () {
  // This file was automatically generated.  Do not modify.

  "use strict";

  var Blockly = Blockly || { Msg: Object.create(null) };

  Blockly.Msg["ADD_COMMENT"] = "Agiunghe unu cumentu";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] =
    "Can't delete the variable '%1' because it's part of the definition of the function '%2'"; // untranslated
  Blockly.Msg["CHANGE_VALUE_TITLE"] = "Muda valori:";
  Blockly.Msg["CLEAN_UP"] = "Lìmpia is brocus";
  Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] =
    "Collapsed blocks contain warnings."; // untranslated
  Blockly.Msg["COLLAPSE_ALL"] = "Serra e stringi Brocus";
  Blockly.Msg["COLLAPSE_BLOCK"] = "Serra e stringi Brocu";
  Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "colori 1";
  Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "colori 2";
  Blockly.Msg["COLOUR_BLEND_HELPURL"] =
    "https://meyerweb.com/eric/tools/color-blend/#:::rgbp"; // untranslated
  Blockly.Msg["COLOUR_BLEND_RATIO"] = "raportu";
  Blockly.Msg["COLOUR_BLEND_TITLE"] = "mestura";
  Blockly.Msg["COLOUR_BLEND_TOOLTIP"] =
    "Amestura duus coloris cun unu raportu (0.0 - 1.0).";
  Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color"; // untranslated
  Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Scebera unu colori de sa tauledda.";
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com"; // untranslated
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "Unu colori a brítiu";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Scebera unu colori a brítiu.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "blue";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "birdi";
  Blockly.Msg["COLOUR_RGB_HELPURL"] =
    "https://www.december.com/html/spec/colorpercompact.html"; // untranslated
  Blockly.Msg["COLOUR_RGB_RED"] = "arrùbiu";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "colora cun";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] =
    "Cuncorda unu colori cun su tanti de arrubiu, birdi, e blue. Totu is valoris depint essi intra 0 e 100.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks"; // untranslated
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] =
    "sàrtiat a foras de sa lòriga";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] =
    "sighit cun su repicu afatànti";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] =
    "Bessit de sa lòriga.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] =
    "Sartiat su chi abarrat de sa loriga, e sighit cun su repicu afatànti.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] =
    "Amonestu: Custu brocu ddu podis ponni sceti aintru de una lòriga.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#for-each"; // untranslated
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "po dònnia item %1 in lista %2";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] =
    "Po dònnia item in sa lista, ponit sa variàbili '%1' pari a s'item, e tandu fait pariga de cumandus.";
  Blockly.Msg["CONTROLS_FOR_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#count-with"; // untranslated
  Blockly.Msg["CONTROLS_FOR_TITLE"] = "po %1 de %2 fintzas %3 a passus de %4";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] =
    'Fait pigai a sa variàbili "%1" i valoris de su primu numeru a s\'urtimu, a su passu impostau e fait su brocu.';
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] =
    "Aciungi una cunditzioni a su brocu si.";
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] =
    "Aciungi una urtima cunditzioni piga-totu a su brocu si.";
  Blockly.Msg["CONTROLS_IF_HELPURL"] =
    "https://github.com/google/blockly/wiki/IfElse"; // untranslated
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] =
    "Aciungi, fùlia, o assenta is partis po torrai a sètiu custu brocu si.";
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "sinuncas";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "sinuncas si";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "si";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] =
    "Si su valori est berus, tandu fait pariga de cumandus.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] =
    "Si su valori est berus, tandu fai su primu brocu de is cumandus. Sinuncas, fai su segundu brocu de is cumandus.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] =
    "Si su primu valori est beridadi, tandu fai su primu brocu de is cumandus. Sinuncas, si su segundu valori est beridadi, fai su segundu brocu de is cumandus.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] =
    "Si su primu valori est berus, tandu fai su primu brocu de is cumandus. Sinuncas, si su segundu valori est berus, fai su segundu brocu de is cumandus. Si mancu unu valori est berus, tandu fai s'urtimu brocu de is cumandus.";
  Blockly.Msg["CONTROLS_REPEAT_HELPURL"] =
    "https://en.wikipedia.org/wiki/For_loop"; // untranslated
  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "fai";
  Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "repiti %1 bortas";
  Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] =
    "Fait pariga de cumandus prus bortas.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#repeat"; // untranslated
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "repiti fintzas";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "repiti interis";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] =
    "Interis su valori est frassu, tandu fai pariga de cumandus.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] =
    "Interis su valori est berus, tandu fai pariga de cumandus.";
  Blockly.Msg["DELETE_ALL_BLOCKS"] = "Scancellu su %1 de is brocus?";
  Blockly.Msg["DELETE_BLOCK"] = "Fùlia Blocu";
  Blockly.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable"; // untranslated
  Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] =
    "Delete %1 uses of the '%2' variable?"; // untranslated
  Blockly.Msg["DELETE_X_BLOCKS"] = "Fulia %1 Blocus";
  Blockly.Msg["DIALOG_CANCEL"] = "Annulla";
  Blockly.Msg["DIALOG_OK"] = "OK";
  Blockly.Msg["DISABLE_BLOCK"] = "Disabìlita Blocu";
  Blockly.Msg["DUPLICATE_BLOCK"] = "Dùplica";
  Blockly.Msg["DUPLICATE_COMMENT"] = "Duplicate Comment"; // untranslated
  Blockly.Msg["ENABLE_BLOCK"] = "Abìlita Blocu";
  Blockly.Msg["EXPAND_ALL"] = "Aberi Brocus";
  Blockly.Msg["EXPAND_BLOCK"] = "Aberi Brocu";
  Blockly.Msg["EXTERNAL_INPUTS"] = "Intradas esternas";
  Blockly.Msg["HELP"] = "Agiudu";
  Blockly.Msg["INLINE_INPUTS"] = "Intradas in lìnia";
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-empty-list"; // untranslated
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "fait una lista buida";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] =
    "Torrat una lista, de longària 0, chena records de datus.";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "lista";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] =
    "Aciungi, fùlia, o assenta is partis po torrai a sètiu custu brocu lista.";
  Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "fait una lista cun";
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] =
    "Acciungi unu item a sa lista.";
  Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] =
    "Fait una lista cun calisiollat numeru de items.";
  Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "primu";
  Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# de sa fini";
  Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#"; // untranslated
  Blockly.Msg["LISTS_GET_INDEX_GET"] = "piga";
  Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "piga e fùlia";
  Blockly.Msg["LISTS_GET_INDEX_LAST"] = "urtimu";
  Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "a brìtiu (random)";
  Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "fùlia";
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] =
    "Torrat su primu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] =
    "Torrat s'elementu de su postu inditau de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] =
    "Torrat s'urtimu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] =
    "Torrat un'elementu a brìtiu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] =
    "Fùliat e torrat su primu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] =
    "Fùliat e torrat s'elementu de su postu inditau de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] =
    "Fùliat e torrat s'urtimu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] =
    "Fùliat e torrat un'elementu a brìtiu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] =
    "Fùliat su primu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] =
    "Fùliat s'elementu de su postu inditau de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] =
    "Fùliat s'urtimu elementu de una lista.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] =
    "Fùliat unu elementu a brìtiu de una lista.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "a # de sa fini";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "fintzas a #";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "a s'urtimu";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-a-sublist"; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] =
    "bogandi suta-lista de su primu";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] =
    "bogandi suta-lista de # de sa fini.";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "bogandi suta-lista de #";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] =
    "Fait una copia de sa parti inditada de sa lista.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 est po s'urtimu elementu.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] =
    "%1 est po su primu elementu.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "circa prima ocasioni de s'item";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list"; // untranslated
  Blockly.Msg["LISTS_INDEX_OF_LAST"] = "circa urtima ocasioni de s'item";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] =
    "Torrat s'indixi de sa primu/urtima ocasioni de s'item in sa lista. Torrat %1 si s'item non s'agatat.";
  Blockly.Msg["LISTS_INLIST"] = "in lista";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#is-empty"; // untranslated
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 est buidu";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Torrat berus si sa lista est buida.";
  Blockly.Msg["LISTS_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#length-of"; // untranslated
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "longària de %1";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Torrat sa longària de una lista.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_REPEAT_TITLE"] =
    "fait una lista cun item %1 repitiu %2 bortas";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] =
    "Fait una lista cun unu numeru giau repitiu su tanti de is bortas inditadas.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#reversing-a-list"; // untranslated
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1"; // untranslated
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list."; // untranslated
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#in-list--set"; // untranslated
  Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "a";
  Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "inserta a";
  Blockly.Msg["LISTS_SET_INDEX_SET"] = "imposta";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] =
    "Insertat s'elementu a su cumintzu de sa lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] =
    "Insertat s'elementu in su postu inditau in una lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] =
    "Aciungit s'elementu a sa fini de sa lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] =
    "Aciungit s'elementu a brítiu in sa lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] =
    "Impostat su primu elementu in una lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] =
    "Impostat s'elementu in su postu inditau de una lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] =
    "Impostat s'urtimu elementu in una lista.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] =
    "Impostat unu elementu random in una lista.";
  Blockly.Msg["LISTS_SORT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#sorting-a-list"; // untranslated
  Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ascending"; // untranslated
  Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "descending"; // untranslated
  Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3"; // untranslated
  Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list."; // untranslated
  Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case"; // untranslated
  Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric"; // untranslated
  Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic"; // untranslated
  Blockly.Msg["LISTS_SPLIT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists"; // untranslated
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "fai una lista de unu testu";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "fai unu testu de una lista";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] =
    "Auni una lista de testus in d-unu sceti, ponendi separadoris.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] =
    "Dividi su testu in un'elencu de testus, firmendi po dònnia separadori.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "cun  separadori";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "frassu";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#values"; // untranslated
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Torrat berus o frassu.";
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "berus";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Inequality_(mathematics)"; // untranslated
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] =
    "Torrat berus si is inputs funt unu uguali a s'àteru.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] =
    "Torrat berus si su primu input est prus mannu de s'àteru.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] =
    "Torrat berus si su primu input est prus mannu o uguali a s'àteru.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] =
    "Torrat berus si su primu input est prus piticu de s'àteru.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] =
    "Torrat berus si su primu input est prus piticu o uguali a s'àteru.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] =
    "Torrat berus si is inputs non funt unu uguali a s'àteru.";
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#not"; // untranslated
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "non %1";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] =
    "Torrat berus si s'input est frassu. Torrat frassu si s'input est berus.";
  Blockly.Msg["LOGIC_NULL"] = "null";
  Blockly.Msg["LOGIC_NULL_HELPURL"] =
    "https://en.wikipedia.org/wiki/Nullable_type"; // untranslated
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Torrat null.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "and";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#logical-operations"; // untranslated
  Blockly.Msg["LOGIC_OPERATION_OR"] = "or";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] =
    "Torrat berus si ambos is inputs funt berus.";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] =
    "Torrat berus si assumancu unu de is inputs est berus.";
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "cumpròa";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:"; // untranslated
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "si frassu";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "si berus";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] =
    "‎Cumproa sa cunditzioni in 'cumproa'. Si sa cunditzioni est berus, torrat su valori 'si berus'; sinuncas torrat su valori 'si frassu'.";
  Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+"; // untranslated
  Blockly.Msg["MATH_ARITHMETIC_HELPURL"] =
    "https://en.wikipedia.org/wiki/Arithmetic"; // untranslated
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] =
    "Torrat sa summa de is duus nùmerus.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] =
    "Torrat su cuotzienti de is duus nùmerus.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] =
    "Torrat sa diferèntzia de is duus nùmerus.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] =
    "Torrat su produtu de is duus nùmerus.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] =
    "Torrat su primu numeru artziau a sa potenza de su segundu nùmeru.";
  Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2"; // untranslated
  Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2"; // untranslated
  Blockly.Msg["MATH_ATAN2_TOOLTIP"] =
    "Return the arctangent of point (X, Y) in degrees from -180 to 180."; // untranslated
  Blockly.Msg["MATH_CHANGE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter"; // untranslated
  Blockly.Msg["MATH_CHANGE_TITLE"] = "muda %1 de %2";
  Blockly.Msg["MATH_CHANGE_TOOLTIP"] =
    "Aciungi unu numeru a sa variabili '%1'.";
  Blockly.Msg["MATH_CONSTANT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Mathematical_constant"; // untranslated
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] =
    "Torrat una de is costantis comunas: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), o ∞ (infiniu).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Clamping_(graphics)"; // untranslated
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "custringi %1 de %2 a %3";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] =
    "Custringi unu numeru aintru de is liminaxus giaus (cumprendius).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷"; // untranslated
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "fait a ddu dividi po";
  Blockly.Msg["MATH_IS_EVEN"] = "est paris";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "est negativu";
  Blockly.Msg["MATH_IS_ODD"] = "est dísparu";
  Blockly.Msg["MATH_IS_POSITIVE"] = "est positivu";
  Blockly.Msg["MATH_IS_PRIME"] = "est primu";
  Blockly.Msg["MATH_IS_TOOLTIP"] =
    "Cumprova si unu numeru est paris, dìsparis, primu, intreu, positivu, negativu o si fait a ddu dividi po unu numeru giau. Torrat berus o frassu.";
  Blockly.Msg["MATH_IS_WHOLE"] = "est intreu";
  Blockly.Msg["MATH_MODULO_HELPURL"] =
    "https://en.wikipedia.org/wiki/Modulo_operation"; // untranslated
  Blockly.Msg["MATH_MODULO_TITLE"] = "arrestu de %1 ÷ %2";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] =
    "Torrat s'arrestu de sa divisioni de duus numerus.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×"; // untranslated
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/Number"; // untranslated
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Unu numeru";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = ""; // untranslated
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "mèdia de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "massimu de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "medianu de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "minimu de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "modas de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "unu item a brìtiu de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] =
    "deviadura standard de sa lista";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "suma sa lista";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] =
    "Torrat sa mèdia (aritimètica) de is valoris de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] =
    "Torrat su numeru prus mannu de sa lista";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] =
    "Torrat su numeru medianu de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] =
    "Torrat su numeru prus piticu de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] =
    "Torrat una lista de is itams prus frecuentis de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] =
    "Torrat unu item a brìtiu de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] =
    "Torrat sa deviadura standard de sa lista.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] =
    "Torrat sa suma de totu is numerus de sa lista.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "una fratzioni a brìtiu";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] =
    "Torrat una fratzioni a brìtiu intra 0.0 (cumpresu) e 1.0 (bogau).";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "numeru intreu a brítiu de %1 a %2";
  Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] =
    "Torrat unu numeru intreu a brìtiu intra duus nùmerus giaus (cumpresus).";
  Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding"; // untranslated
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "arretunda";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "arretunda faci a bàsciu.";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "Arretunda faci a susu";
  Blockly.Msg["MATH_ROUND_TOOLTIP"] =
    "Arretunda unu numeru faci a susu o faci a bàsciu.";
  Blockly.Msg["MATH_SINGLE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Square_root"; // untranslated
  Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "assolutu";
  Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "arraxina cuadra";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] =
    "Torrat su valori assolútu de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] =
    "Torrat (e) a sa potèntzia de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] =
    "Torrat su logaritmu naturali de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] =
    "Torrat su logaritmu a basi 10 de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] =
    "Torrat su valori negau de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] =
    "Torrat (10) a sa potèntzia de unu numeru.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] =
    "Torrat s'arraxina cuadra de unu numeru.";
  Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-"; // untranslated
  Blockly.Msg["MATH_TRIG_ACOS"] = "acos"; // untranslated
  Blockly.Msg["MATH_TRIG_ASIN"] = "asin"; // untranslated
  Blockly.Msg["MATH_TRIG_ATAN"] = "atan"; // untranslated
  Blockly.Msg["MATH_TRIG_COS"] = "cos"; // untranslated
  Blockly.Msg["MATH_TRIG_HELPURL"] =
    "https://en.wikipedia.org/wiki/Trigonometric_functions"; // untranslated
  Blockly.Msg["MATH_TRIG_SIN"] = "sin"; // untranslated
  Blockly.Msg["MATH_TRIG_TAN"] = "tan"; // untranslated
  Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Torrat su arccosinu de unu numeru.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Torrat su arcsinu de unu numeru.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] =
    "Torrat su arctangenti de unu numeru.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] =
    "Torrat su cosinu de unu gradu (no radianti).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] =
    "Torrat su sinu de unu gradu (no radianti).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] =
    "Torrat sa tangenti de unu gradu (no radianti).";
  Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Create colour variable..."; // untranslated
  Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable..."; // untranslated
  Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable..."; // untranslated
  Blockly.Msg["NEW_VARIABLE"] = "Variabili noa...";
  Blockly.Msg["NEW_VARIABLE_TITLE"] = "Nòmini de sa variabili noa:";
  Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "New variable type:"; // untranslated
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "permiti decraratzionis";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "con:";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] =
    "Arròllia sa funtzione '%1' cuncordada dae s'impitadore.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] =
    "Arròllia sa funtzione '%1' cuncordada dae s'impitadore e imprea s'output suu.";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "cun";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "Ingenerau'%1'";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function..."; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "fait calincuna cosa";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "po";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] =
    "Fait una funtzioni chena output.";
  Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "torrat";
  Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] =
    "Fait una funtzioni cun output.";
  Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] =
    "Amonestu: Custa funtzioni tenit parametrus duplicaus.";
  Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] =
    "Marca sa definitzioni de funtzioni.";
  Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] =
    "https://c2.com/cgi/wiki?GuardClause"; // untranslated
  Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] =
    "Si unu valori est berus, tandu torrat unu segundu valori.";
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] =
    "Amonestu: Custu brocu ddu podis ponni sceti aintru de una funtzioni.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "nomini input:";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] =
    "Aciungi un input a sa funtzioni.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "inputs";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] =
    "Aciungi, fùlia, o assenta is inputs a custa funtzioni.";
  Blockly.Msg["REDO"] = "Redo"; // untranslated
  Blockly.Msg["REMOVE_COMMENT"] = "Fùlia unu cumentu";
  Blockly.Msg["RENAME_VARIABLE"] = "Muda nòmini a variabili...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] = "A is variabilis '%1' muda nòmini a:";
  Blockly.Msg["TEXT_APPEND_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_APPEND_TITLE"] = "a %1 acciungi su testu %2";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Aciungit testu a sa variàbili '%1'.";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#adjusting-text-case"; // untranslated
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "a minúdu";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] =
    "cun Primu lìtera a Mauschínu";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "a mauschínu";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] =
    "Torrat una copia de su testu inditau mudendi mauschínu/minúdu.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "piga sa prima lìtera";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "piga sa lìtera # de sa fini";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "piga sa lìtera #";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-text"; // untranslated
  Blockly.Msg["TEXT_CHARAT_LAST"] = "piga s'urtima lìtera";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "piga una lìtera a brìtiu";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2"; // untranslated
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Torrat sa lìtera de su postu giau.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#counting-substrings"; // untranslated
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2"; // untranslated
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] =
    "Count how many times some text occurs within some other text."; // untranslated
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] =
    "Acciungi unu item a su testu.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "auni a pari";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] =
    "Aciungi, fùlia, o assenta is partis po torrai a sètiu custu brocu de testu.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "a sa lìtera # de sa fini";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "a sa lìtera #";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "a s'urtima lìtera";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text"; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "in su testu";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] =
    "piga suta-stringa de sa primu lìtera";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] =
    "piga suta-stringa de sa lìtera # fintzas a fini";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] =
    "piga suta-stringa de sa lìtera #";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Torrat su testu inditau.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#finding-text"; // untranslated
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] =
    "circa prima ocasioni de su testu";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] =
    "circa urtima ocasioni de su testu";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "in su testu %1 %2 %3";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] =
    "Torrat s'indixi de sa primu/urtima ocasioni de su primu testu in su segundu testu. Torrat %1 si su testu no ddu agatat.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#checking-for-empty-text"; // untranslated
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 est buidu";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] =
    "Torrat berus si su testu giau est buidu.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-creation"; // untranslated
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "scri testu cun";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] =
    "Fait unu testu ponendi a pari parigas de items.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "longària de %1";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] =
    "Torrat su numeru de lìteras (cun is spàtzius) in su testu giau.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#printing-text"; // untranslated
  Blockly.Msg["TEXT_PRINT_TITLE"] = "scri %1";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Scri su testu, numeru o àteru valori.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user"; // untranslated
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] =
    "Pregonta unu nùmeru a s'impitadore.";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Pregonta testu a s'impitadore.";
  Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "pregonta po unu numeru";
  Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "pregonta po su testu";
  Blockly.Msg["TEXT_REPLACE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#replacing-substrings"; // untranslated
  Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3"; // untranslated
  Blockly.Msg["TEXT_REPLACE_TOOLTIP"] =
    "Replace all occurances of some text within some other text."; // untranslated
  Blockly.Msg["TEXT_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#reversing-text"; // untranslated
  Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1"; // untranslated
  Blockly.Msg["TEXT_REVERSE_TOOLTIP"] =
    "Reverses the order of the characters in the text."; // untranslated
  Blockly.Msg["TEXT_TEXT_HELPURL"] =
    "https://en.wikipedia.org/wiki/String_(computer_science)"; // untranslated
  Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Una lìtera, paràula, o linia de testu.";
  Blockly.Msg["TEXT_TRIM_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces"; // untranslated
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "bogat spàtzius de ambus càbudus de";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] =
    "bogat spàtzius de su càbudu de manca de";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] =
    "bogat spàtzius de su càbudu de dereta de";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] =
    "Torrat una copia de su testu bogaus is spàtzius de unu o de ambus is càbudus.";
  Blockly.Msg["TODAY"] = "Oe";
  Blockly.Msg["UNDO"] = "Undo"; // untranslated
  Blockly.Msg["UNNAMED_KEY"] = "unnamed"; // untranslated
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "item";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Fait 'imposta %1'";
  Blockly.Msg["VARIABLES_GET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#get"; // untranslated
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Torrat su valori de custa variabili.";
  Blockly.Msg["VARIABLES_SET"] = "imposta %1 a %2";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Fait 'piga %1'";
  Blockly.Msg["VARIABLES_SET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#set"; // untranslated
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] =
    "Imposta custa variabili uguali a s'input.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] =
    "A variable named '%1' already exists."; // untranslated
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] =
    "A variable named '%1' already exists for another type: '%2'."; // untranslated
  Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace"; // untranslated
  Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something..."; // untranslated
  Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] =
    Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_FOR_INPUT_DO"] =
    Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] =
    Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
  Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] =
    Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
  Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
  Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] =
    Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] =
    Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["LISTS_GET_INDEX_HELPURL"] =
    Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
  Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
  Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] =
    Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
  Blockly.Msg["PROCEDURES_DEFRETURN_DO"] =
    Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
  Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] =
    Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
  Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] =
    Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
  Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] =
    Blockly.Msg["VARIABLES_DEFAULT_NAME"];

  Blockly.Msg["MATH_HUE"] = "230";
  Blockly.Msg["LOOPS_HUE"] = "120";
  Blockly.Msg["LISTS_HUE"] = "260";
  Blockly.Msg["LOGIC_HUE"] = "210";
  Blockly.Msg["VARIABLES_HUE"] = "330";
  Blockly.Msg["TEXTS_HUE"] = "160";
  Blockly.Msg["PROCEDURES_HUE"] = "290";
  Blockly.Msg["COLOUR_HUE"] = "20";
  Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
  return Blockly.Msg;
});
