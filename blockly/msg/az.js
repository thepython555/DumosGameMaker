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

  Blockly.Msg["ADD_COMMENT"] = "Şərh əlavə et";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] =
    "'%1' dəyişənini silmək mümkün deyil, çünki o '%2' funksiyasının təyin hissəsidir";
  Blockly.Msg["CHANGE_VALUE_TITLE"] = "Qiyməti dəyiş:";
  Blockly.Msg["CLEAN_UP"] = "Blokları təmizlə";
  Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] =
    "Collapsed blocks contain warnings."; // untranslated
  Blockly.Msg["COLLAPSE_ALL"] = "Blokları yığ";
  Blockly.Msg["COLLAPSE_BLOCK"] = "Bloku yığ";
  Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "rəng 1";
  Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "rəng 2";
  Blockly.Msg["COLOUR_BLEND_HELPURL"] =
    "https://meyerweb.com/eric/tools/color-blend/#:::rgbp"; // untranslated
  Blockly.Msg["COLOUR_BLEND_RATIO"] = "nisbət";
  Blockly.Msg["COLOUR_BLEND_TITLE"] = "qarışdır";
  Blockly.Msg["COLOUR_BLEND_TOOLTIP"] =
    "İki rəngi verilmiş nisbətdə (0,0 - 1,0) qarışdırır.";
  Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://az.wikipedia.org/wiki/Rəng";
  Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Palitradan bir rəng seçin.";
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com"; // untranslated
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "təsadüfi rəng";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Təsadüfi bir rəng seçin.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "mavi";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "yaşıl";
  Blockly.Msg["COLOUR_RGB_HELPURL"] =
    "https://www.december.com/html/spec/colorpercompact.html"; // untranslated
  Blockly.Msg["COLOUR_RGB_RED"] = "qırmızı";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "rənglə";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] =
    "Qırmızı, yaşıl və mavinin göstərilən miqdarı ilə bir rəng düzəlt. Bütün qiymətlər 0 ilə 100 arasında olmalıdır.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks"; // untranslated
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "dövrdən çıx";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] =
    "dövrün növbəti addımından davam et";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Cari dövrdən çıx.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] =
    "Bu dövrün qalanını ötür və növbəti addımla davam et.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] =
    "Xəbərdarlıq: Bu blok ancaq dövr daxilində istifadə oluna bilər.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#for-each"; // untranslated
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "hər element üçün %1 siyahıda %2";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] =
    'Siyahıdakı hər element üçün "%1" dəyişənini elementə mənimsət və bundan sonra bəzi əmrləri yerinə yetir.';
  Blockly.Msg["CONTROLS_FOR_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#count-with"; // untranslated
  Blockly.Msg["CONTROLS_FOR_TITLE"] =
    "say: %1 %2 ilə başlayıb, %3 qiymətinə kimi %4 qədər dəyiş";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] =
    '"%1" dəyişəni başlanğıc ədəddən son ədədə qədər göstərilən aralıqla qiymətlər aldıqca göstərilən blokları yerinə yetir.';
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] =
    '"Əgər" blokuna bir şərt əlavə et.';
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] =
    '"Əgər" blokuna qalan bütün halları əhatə edəb son bir şərt əlavə et.';
  Blockly.Msg["CONTROLS_IF_HELPURL"] =
    "https://github.com/google/blockly/wiki/IfElse"; // untranslated
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] =
    'Bu "əgər" blokunu dəyişdirmək üçün bölümlərin yenisini əlavə et, sil və ya yerini dəyiş.';
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "əks halda";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "əks halda əgər";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "əgər";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] =
    "Əgər qiymət doğrudursa, onda bəzi əmrləri yerinə yetir.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] =
    "Əgər qiymət doğrudursa, onda birinci əmrlər blokunu yerinə yetir. Əks halda isə ikinci əmrlər blokunu yerinə yetir.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] =
    "Əgər birinci qiymət doğrudursa, onda birinci əmrlər blokunu yerinə yetir. Əks halda əgər ikinci qiymət doğrudursa, onda ikinci əmrlər blokunu yerinə yetir.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] =
    "Əgər birinci qiymət doğrudursa, onda birinci əmrlər blokunu yerinə yetir. Əks halda əgər ikinci qiymət doğrudursa, onda ikinci əmrlər blokunu yerinə yetir. Əgər qiymətlərdən heç biri doğru deyilsə, onda axırıncı əmrlər blokunu yerinə yetir.";
  Blockly.Msg["CONTROLS_REPEAT_HELPURL"] =
    "https://az.wikipedia.org/wiki/For_loop";
  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "icra et";
  Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "%1 dəfə təkrar et";
  Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] =
    "Bəzi əmrləri bir neçə dəfə yerinə yetir.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#repeat"; // untranslated
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "təkrar et, ta ki";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "təkrar et, hələ ki";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] =
    'Hələ ki, qiymət "yalan"dır, bəzi əmrləri yerinə yetir.';
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] =
    'Hələ ki, qiymət "doğru"dur, bəzi əmrləri yerinə yetir.';
  Blockly.Msg["DELETE_ALL_BLOCKS"] = "Bütün %1 blok silinsin?";
  Blockly.Msg["DELETE_BLOCK"] = "Bloku sil";
  Blockly.Msg["DELETE_VARIABLE"] = "'%1' adlı dəyişəni sil";
  Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] =
    "'%2' dəyişəninin %1 istifadəsini silək?";
  Blockly.Msg["DELETE_X_BLOCKS"] = "%1 bloku sil";
  Blockly.Msg["DIALOG_CANCEL"] = "Ləğv et";
  Blockly.Msg["DIALOG_OK"] = "TAMAM";
  Blockly.Msg["DISABLE_BLOCK"] = "Bloku söndür";
  Blockly.Msg["DUPLICATE_BLOCK"] = "Dublikat";
  Blockly.Msg["DUPLICATE_COMMENT"] = "Şərhin nüsxəsini yarat";
  Blockly.Msg["ENABLE_BLOCK"] = "Bloku aktivləşdir";
  Blockly.Msg["EXPAND_ALL"] = "Blokları aç";
  Blockly.Msg["EXPAND_BLOCK"] = "Bloku aç";
  Blockly.Msg["EXTERNAL_INPUTS"] = "Xarici girişlər";
  Blockly.Msg["HELP"] = "Kömək";
  Blockly.Msg["INLINE_INPUTS"] = "Sətiriçi girişlər";
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-empty-list"; // untranslated
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "boş siyahı düzəlt";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] =
    "Heç bir verilən qeyd olunmamış, uzunluğu 0 olan bir siyahı verir";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "siyahı";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] =
    "Bu siyahı blokunu yenidən konfigurasiya etmək üçün bölmələri əlavə edin, silin və ya yerlərini dəyişin.";
  Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "bunlardan siyahı düzəlt";
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] =
    "Siyahıya element əlavə edin.";
  Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "İstənilən ölçülü siyahı yaradın.";
  Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "birinci";
  Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "axırdan # nömrəli";
  Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";
  Blockly.Msg["LISTS_GET_INDEX_GET"] = "götür";
  Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "götür və sil";
  Blockly.Msg["LISTS_GET_INDEX_LAST"] = "axırıncı";
  Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "təsadüfi";
  Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "yığışdır";
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] =
    "Siyahının ilk elementini qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] =
    "Siyahıdan təyin olunmuş indeksli elementi qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] =
    "Siyahının son elementini qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] =
    "Siyahıdan hər hansı təsadüfi elementi qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] =
    "Siyahıdan ilk elementi silir və qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] =
    "Siyahıdan təyin olunmuş indeksli elementi silir və qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] =
    "Siyahıdan son elementi silir və qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] =
    "Siyahıdan təsadufi elementi silir və qaytarır.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] =
    "Siyahıdan ilk elementi silir.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] =
    "Siyahıdan təyin olunmuş indeksli elementi silir.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] =
    "Siyahıdan son elementi silir.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] =
    "Siyahıdan təsadüfi bir elementi silir.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "sondan # nömrəliyə";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "# nömrəliyə";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "Sonuncuya";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-a-sublist"; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "Birincidən alt-siyahını alın";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] =
    "# sonuncudan alt-siyahını alın";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] =
    "# - dən alt-siyahını alın";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] =
    "Siyahının təyin olunmuş hissəsinin surətini yaradın.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 son elementdir.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 ilk elementdir.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] =
    "Element ilə ilk rastlaşma indeksini müəyyən edin";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list"; // untranslated
  Blockly.Msg["LISTS_INDEX_OF_LAST"] =
    "Element ilə son rastlaşma indeksini müəyyən edin";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] =
    "Elementin siyahıda ilk/son rastlaşma indeksini qaytarır. Əgər siyahıda mətn tapılmadısa, %1 qaytarılır.";
  Blockly.Msg["LISTS_INLIST"] = "siyahıda";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#is-empty"; // untranslated
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 boşdur";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] =
    'Siyahı boşdursa "doğru" cavabını qaytarır.';
  Blockly.Msg["LISTS_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#length-of"; // untranslated
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "%1 siyahısının uzunluğu";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Siyahının uzunluğunu verir.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_REPEAT_TITLE"] =
    "%1 elementinin %2 dəfə təkrarlandığı siyahı düzəlt";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] =
    "Təyin olunmuş elementin/qiymətin təyin olunmuş sayda təkrarlandığı siyahını yaradır.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#reversing-a-list"; // untranslated
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "əksinə dəyiş %1";
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Siyahının nüsxəsini əksinə dəyiş.";
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#in-list--set"; // untranslated
  Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "Kimi";
  Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "daxil et";
  Blockly.Msg["LISTS_SET_INDEX_SET"] = "təyin et";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] =
    "Elementi siyahının əvvəlinə daxil edir.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] =
    "Elementi siyahıda göstərilən yerə daxil edir.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] =
    "Elementi siyahının sonuna artırır.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] =
    "Elementi siyahıda təsadüfi seçilmiş bir yerə atır.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] =
    "Siyahıda birinci elementi təyin edir.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] =
    "Siyahının göstərilən yerdəki elementini təyin edir.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] =
    "Siyahının sonuncu elementini təyin edir.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] =
    "Siyahının təsadüfi seçilmiş bir elementini təyin edir.";
  Blockly.Msg["LISTS_SORT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#sorting-a-list"; // untranslated
  Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "artan üzrə";
  Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "azalan üzrə";
  Blockly.Msg["LISTS_SORT_TITLE"] = "%1 %2 %3 sortlaşdır";
  Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Siyahının nüsxəsini sortlaşdır.";
  Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] =
    "əlifba üzrə, registrı nəzərə almadan";
  Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "say üzrə";
  Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "əlifba üzrə";
  Blockly.Msg["LISTS_SPLIT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists"; // untranslated
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "mətndən siyahı düzəlt";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "siyahıdan mətn düzəlt";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] =
    "Mətnlər siyahısından ayırıcılarla birgə bir mətn yaradır.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] =
    "Mətni ayırıcılara görə bölərək mətnlər siyahısı yaradır.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "ayırıcıyla";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "səhf";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#values"; // untranslated
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] =
    '"doğru" və ya "səhf" cavanını qaytarır.';
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "doğru";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] =
    "https://az.wikipedia.org/wiki/bərabərsizlik_(riyazi)";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] =
    'Girişlər bir birinə bərabərdirsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] =
    'Birinci giriş ikincidən böyükdürsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] =
    'Birinci giriş ikincidən böyük və ya bərarbərdirsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] =
    'Birinci giriş ikincidən kiçikdirsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] =
    'Birinci giriş ikincidən kiçik və ya bərarbərdirsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] =
    'Girişlər bərabər deyillərsə "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#not"; // untranslated
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "%1 deyil";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] =
    'Giriş "yalan"-dursa "doğru" cavabını qaytarır. Giriş "doğru"-dursa "səhf" cavabını qaytarır.';
  Blockly.Msg["LOGIC_NULL"] = "boş";
  Blockly.Msg["LOGIC_NULL_HELPURL"] =
    "https://en.wikipedia.org/wiki/Nullable_type"; // untranslated
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Boş cavab qaytarır.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "və";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#logical-operations"; // untranslated
  Blockly.Msg["LOGIC_OPERATION_OR"] = "və ya";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] =
    'Hər iki giriş "doğru"-dursa "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] =
    'Girişlərdən heç olmasa biri "doğru"-dursa "doğru" cavabını qaytarır.';
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "test";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:"; // untranslated
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "əgər səhvdirsə";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "əgər doğrudursa";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] =
    '\'Yoxla\' əmrindəki şərtə nəzər yetirin. Əgər şərt "doğru"-dursa "əgər doğru", əks halda isə "əgər yalan" cavabını qaytarır.';
  Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+"; // untranslated
  Blockly.Msg["MATH_ARITHMETIC_HELPURL"] =
    "https://az.wikipedia.org/wiki/Hesab";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "İki ədədin cəmini qaytarır.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] =
    "İki ədədin nisbətini qaytarır.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "İki ədədin fərqini qaytarır.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] =
    "İki ədədin hasilini verir.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] =
    "Birinci ədədin ikinci ədəd dərəcəsindən qüvvətini qaytarır.";
  Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2"; // untranslated
  Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2"; // untranslated
  Blockly.Msg["MATH_ATAN2_TOOLTIP"] =
    "(X,Y) nöqtələrinin -180 - 180 dərəcədə arktangensini hesabla.";
  Blockly.Msg["MATH_CHANGE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter"; // untranslated
  Blockly.Msg["MATH_CHANGE_TITLE"] = "dəyiş: %1 buna: %2";
  Blockly.Msg["MATH_CHANGE_TOOLTIP"] =
    "'%1' dəyişəninin üzərinə bir ədəd artır.";
  Blockly.Msg["MATH_CONSTANT_HELPURL"] =
    "https://az.wikipedia.org/wiki/Riyazi_sabitlər";
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] =
    "Ümumi sabitlərdən birini qaytarır π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), və ya ∞ (sonsuzluq).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Clamping_(graphics)"; // untranslated
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] =
    "%1 üçün ən aşağı %2, ən yuxarı %3 olmağı tələb et";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] =
    "Bir ədədin verilmiş iki ədəd arasında olmasını tələb edir (sərhədlər də daxil olmaqla).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷"; // untranslated
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "bölünür";
  Blockly.Msg["MATH_IS_EVEN"] = "cütdür";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "mənfidir";
  Blockly.Msg["MATH_IS_ODD"] = "təkdir";
  Blockly.Msg["MATH_IS_POSITIVE"] = "müsbətdir";
  Blockly.Msg["MATH_IS_PRIME"] = "sadədir";
  Blockly.Msg["MATH_IS_TOOLTIP"] =
    'Bir ədədin cüt, tək, sadə, tam, müsbət, mənfi olmasını və ya müəyyən bir ədədə bölünməsini yoxlayır. "Doğru" və ya "yalan" qiymətini qaytarır.';
  Blockly.Msg["MATH_IS_WHOLE"] = "tamdır";
  Blockly.Msg["MATH_MODULO_HELPURL"] =
    "https://en.wikipedia.org/wiki/Modulo_operation"; // untranslated
  Blockly.Msg["MATH_MODULO_TITLE"] = "%1 ÷ %2 bölməsinin qalığı";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] =
    "İki ədədin nisbətindən alınan qalığı qaytarır.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×"; // untranslated
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://az.wikipedia.org/wiki/Ədəd";
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Ədəd.";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = ""; // untranslated
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "siyahının ədədi ortası";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "siyahının maksimumu";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "siyahının medianı";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "siyahının minimumu";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] =
    "Siyahı modları( Ən çox rastlaşılan elementləri)";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] =
    "siyahıdan təsadüfi seçilmiş bir element";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] =
    "Siyahının standart deviasiyası";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "Siyahının cəmi";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] =
    "Siyahıdaki ədədlərin ədədi ortasını qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] =
    "Siyahıdaki ən böyük elementi qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] =
    "Siyahının median elementini qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] =
    "Siyahıdaki ən kiçik ədədi qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] =
    "Siyahıdaki ən çox rastlanan element(lər)dən ibarət siyahı qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] =
    "Siyahıdan təsadüfi bir element qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] =
    "Siyahının standart deviasiyasını qaytarır.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] =
    "Siyahıdakı bütün ədədlərin cəmini qaytarır.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "təsadüfi kəsr";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] =
    "0.0 (daxil olmaqla) və 1.0 (daxil olmamaqla) ədədlərinin arasından təsadüfi bir kəsr ədəd qaytarır.";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_INT_TITLE"] =
    "%1 ilə %2 arasından təsadüfi tam ədəd";
  Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] =
    "Verilmiş iki ədəd arasından (ədədrlər də daxil olmaqla) təsadüfi bir tam ədəd qaytarır.";
  Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding"; // untranslated
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "yuvarlaqlaşdır";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "aşağı yuvarlaqlaşdır";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "yuxarı yuvarlaqlaşdır";
  Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Ədədi aşağı və ya yuxari yuvarlaqşdır.";
  Blockly.Msg["MATH_SINGLE_HELPURL"] =
    "https://az.wikipedia.org/wiki/Kvadrat_kökləri";
  Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "modul";
  Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "kvadrat kök";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Ədədin modulunu qaytarır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] =
    "e sabitinin verilmiş ədədə qüvvətini qaytarır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Ədədin natural loqarifmini tapır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] =
    "Ədədin 10-cu dərəcədən loqarifmini tapır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Ədədin əksini qaytarır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] =
    "10-un verilmiş ədədə qüvvətini qaytarır.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Ədədin kvadrat kökünü qaytarır.";
  Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-"; // untranslated
  Blockly.Msg["MATH_TRIG_ACOS"] = "arccos";
  Blockly.Msg["MATH_TRIG_ASIN"] = "arcsin";
  Blockly.Msg["MATH_TRIG_ATAN"] = "arctan";
  Blockly.Msg["MATH_TRIG_COS"] = "cos";
  Blockly.Msg["MATH_TRIG_HELPURL"] =
    "https://az.wikipedia.org/wiki/Triqonometrik_funksiyalar";
  Blockly.Msg["MATH_TRIG_SIN"] = "sin";
  Blockly.Msg["MATH_TRIG_TAN"] = "tg";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Ədədin arccosinusunu qaytarır.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Ədədin arcsinusunu qaytarır.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Ədədin arctanqensini qaytarır.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] =
    "Dərəcənin kosinusunu qaytarır (radianın yox).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] =
    "Dərəcənin sinusunu qaytar (radianın yox).";
  Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] =
    "Dərəcənin tangensini qaytar (radianın yox).";
  Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Yeni rəng dəyişəni...";
  Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Yeni rəqəm dəyişəni...";
  Blockly.Msg["NEW_STRING_VARIABLE"] = "Yeni sətir dəyişəni...";
  Blockly.Msg["NEW_VARIABLE"] = "Yeni dəyişən...";
  Blockly.Msg["NEW_VARIABLE_TITLE"] = "Yeni dəyişənin adı:";
  Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Yeni dəyişənin tipi:";
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "operatorlara icazə";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "ilə:";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] =
    "Yaradılmış '%1' funksiyasını çalışdır.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] =
    "Yaradılmış '%1' funksiyasını çalışdır və nəticəni istifadə et.";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "ilə:";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "'%1' yarat";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Bu funksiyanı təsvir et";
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "hansısa əməliyyat";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "icra et:";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] =
    "Nəticəsi olmayan funksiya yaradır.";
  Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "qaytar";
  Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] =
    "Nəticəsi olan funksiya yaradır.";
  Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] =
    "Xəbərdarlıq: Bu funksiyanın təkrar olunmuş parametrləri var.";
  Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Funksiyanın təyinatını vurğula";
  Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] =
    "https://c2.com/cgi/wiki?GuardClause"; // untranslated
  Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] =
    'Əgər bir dəyər "doğru"-dursa onda ikinci dəyəri qaytar.';
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] =
    "Xəbərdarlıq: Bu blok ancaq bir funksiyanın təyinatı daxilində işlədilə bilər.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "Giriş adı:";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] =
    "Funksiyaya giriş parametrləri əlavə et.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "girişlər";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] =
    "Bu funksiyanın giriş parametrləri üçün əlavə et, sil, və ya yenilə.";
  Blockly.Msg["REDO"] = "İrəli";
  Blockly.Msg["REMOVE_COMMENT"] = "Şərhi sil";
  Blockly.Msg["RENAME_VARIABLE"] = "Dəyişənin adını dəyiş...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] =
    "Bütün '%1' dəyişənlərinin adını buna dəyiş:";
  Blockly.Msg["TEXT_APPEND_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_APPEND_TITLE"] =
    "bu mətnin sonuna: %1 bu mətni əlavə et: %2";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "'%1' dəyişəninin sonuna nəsə əlavə et.";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#adjusting-text-case"; // untranslated
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "kiçik hərflərlə";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "Baş Hərflərlə";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "BÖYÜK HƏRFLƏRLƏ";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] =
    "Mətndə hərflərin böyük-kiçikliyini dəyiş.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "birinci hərfi götür";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "axırdan bu nömrəli hərfi götür";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "bu nömrəli hərfi götür";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-text"; // untranslated
  Blockly.Msg["TEXT_CHARAT_LAST"] = "axırıncı hərfi götür";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "təsadüfi hərf götür";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "mətndə %1 %2";
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Göstərilən mövqedəki hərfi qaytarır.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#counting-substrings"; // untranslated
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "%2 içindən %1 sayını hesabla";
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] =
    "Hesablayaq, mətnin bu hissəsi başqa mətndə neçə dəfə  rast gəlinir.";
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Mətnə bir element əlavə et.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "birləşdir";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] =
    "Bu mətn blokunu yenidən konfigurasiya etmək üçün bölmələri əlavə edin, silin və ya yerlərini dəyişin.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] =
    "axırdan bu nömrəli hərfə qədər";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "bu nömrəli hərfə qədər";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "son hərfə qədər";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text"; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "mətndə";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "Mətnin surətini ilk hərfdən";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] =
    "Mətnin surətini sondan bu nömrəli # hərfdən";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] =
    "Mətnin surətini bu nömrəli hərfdən";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] =
    "Mətnin təyin olunmuş hissəsini qaytarır.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#finding-text"; // untranslated
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] =
    "Bu mətn ilə ilk rastlaşmanı tap:";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] =
    "Bu mətn ilə son rastlaşmanı tap:";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "mətndə %1 %2 %3";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] =
    "Birinci mətnin ikinci mətndə ilk/son rastlaşma indeksini qaytarır. Əgər rastlaşma baş verməzsə, %1 qaytarır.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#checking-for-empty-text"; // untranslated
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 boşdur";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] =
    "Verilmiş mətn boşdursa, doğru qiymətini qaytarır.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-creation"; // untranslated
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "Verilmişlərlə mətn yarat";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] =
    "İxtiyari sayda elementlərinin birləşməsi ilə mətn parçası yarat.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "%1 - ın uzunluğu";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] =
    "Verilmiş mətndəki hərflərin(sözlər arası boşluqlar sayılmaqla) sayını qaytarır.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#printing-text"; // untranslated
  Blockly.Msg["TEXT_PRINT_TITLE"] = "%1 - i çap elə";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] =
    "Təyin olunmuş mətn, ədəd və ya hər hansı bir başqa elementi çap elə.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user"; // untranslated
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] =
    "İstifadəçiyə ədəd daxil etməsi üçün sorğu/tələb göndərin.";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] =
    "İstifadəçiyə mətn daxil etməsi üçün sorğu/tələb göndərin.";
  Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] =
    "İstifadəçiyə ədəd daxil etməsi üçün sorğunu/tələbi ismarıc kimi göndərin";
  Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] =
    "İstifadəçiyə mətn daxil etməsi üçün sorğunu/tələbi ismarıc ilə göndərin";
  Blockly.Msg["TEXT_REPLACE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#replacing-substrings"; // untranslated
  Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "%3 -də %1 əvəz et %2";
  Blockly.Msg["TEXT_REPLACE_TOOLTIP"] =
    "Bütün uyğunluqlu bəzi mətnlərin digər bəzi mətnlərə dəyişdirilməsi.";
  Blockly.Msg["TEXT_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#reversing-text"; // untranslated
  Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "əksinə dəyiş %1";
  Blockly.Msg["TEXT_REVERSE_TOOLTIP"] =
    "Mətndəki simvolların ardıcıllığını əksinə dəyiş.";
  Blockly.Msg["TEXT_TEXT_HELPURL"] =
    "https://en.wikipedia.org/wiki/String_(computer_science)"; // untranslated
  Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Mətndəki hərf, söz və ya sətir.";
  Blockly.Msg["TEXT_TRIM_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces"; // untranslated
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "boşluqları hər iki tərəfdən pozun";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] =
    "boşluqlari yalnız sol tərəfdən pozun";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] =
    "boşluqları yalnız sağ tərəfdən pozun";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] =
    "Mətnin hər iki və ya yalnız bir tərəfdən olan boşluqları pozulmuş surətini qaytarın.";
  Blockly.Msg["TODAY"] = "Bugün";
  Blockly.Msg["UNDO"] = "Geri";
  Blockly.Msg["UNNAMED_KEY"] = "adsız";
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "element";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "'%1 - i təyin et' - i yarat";
  Blockly.Msg["VARIABLES_GET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#get"; // untranslated
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Bu dəyişənin qiymətini qaytarır.";
  Blockly.Msg["VARIABLES_SET"] = "%1 - i bu qiymət ilə təyin et: %2";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "'%1 - i götür' - ü yarat";
  Blockly.Msg["VARIABLES_SET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#set"; // untranslated
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] =
    "Bu dəyişəni daxil edilmiş qiymətə bərabər edir.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "'%1' adlı dəyişən artıq mövcuddur.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] =
    "'%1' adlı dəyişən artıq '%2': tipində istifadə edilir .";
  Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace"; // untranslated
  Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Buraya nə isə yaz...";
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
