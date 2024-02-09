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

  Blockly.Msg["ADD_COMMENT"] = "ಟಿಪ್ಪಣಿ ಸೇರಿಸು";
  Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] =
    "'%1' ಚರಾಂಶವನ್ನು ಅಳಿಸಲಾಗುವುದಿಲ್ಲ. ಏಕೆಂದರೆ ಇದು '%2' ಕಾರ್ಯಘಟಕದ ವ್ಯಾಖ್ಯಾನದ ಭಾಗವಾಗಿದೆ";
  Blockly.Msg["CHANGE_VALUE_TITLE"] = "ಮೌಲ್ಯ ಬದಲಾಯಿಸು:";
  Blockly.Msg["CLEAN_UP"] = "ಬ್ಲಾಕ್‍ಗಳನ್ನೆಲ್ಲಾ ಒಪ್ಪವಾಗಿರಿಸು";
  Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] =
    "ಸಂಕುಚಿತಗೊಂಡ ಬ್ಲಾಕ್ ಗಳು ಎಚ್ಚರಿಕೆಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ.";
  Blockly.Msg["COLLAPSE_ALL"] = "ಬ್ಲಾಕ್‍ಗಳನ್ನು ಮಡಿಸಿಬಿಡು";
  Blockly.Msg["COLLAPSE_BLOCK"] = "ಬ್ಲಾಕ್‍ನ್ನು ಮಡಿಸಿಬಿಡು";
  Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "ಬಣ್ಣ 1";
  Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "ಬಣ್ಣ 2";
  Blockly.Msg["COLOUR_BLEND_HELPURL"] =
    "https://meyerweb.com/eric/tools/color-blend/#:::rgbp"; // untranslated
  Blockly.Msg["COLOUR_BLEND_RATIO"] = "ಅನುಪಾತ";
  Blockly.Msg["COLOUR_BLEND_TITLE"] = "ಮಿಶ್ರಣಮಾಡು";
  Blockly.Msg["COLOUR_BLEND_TOOLTIP"] =
    "ಕೊಟ್ಟಿರುವ ಅನುಪಾತದಂತೆ(0.0 - 1.0) ಎರಡು ಬಣ್ಣಗಳನ್ನು ಮಿಶ್ರಣ ಮಾಡುತ್ತದೆ.";
  Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color"; // untranslated
  Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "ವರ್ಣಫಲಕದಿಂದ ಬಣ್ಣವನ್ನು ಆರಿಸು.";
  Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com"; // untranslated
  Blockly.Msg["COLOUR_RANDOM_TITLE"] = "ಯಾದೃಚ್ಛಿಕ ಬಣ್ಣ";
  Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] =
    "ಯಾದೃಚ್ಛಿಕವಾಗಿ ಯಾವುದಾದರೂ ಒಂದು ಬಣ್ಣವನ್ನು ಆರಿಸು.";
  Blockly.Msg["COLOUR_RGB_BLUE"] = "ನೀಲಿ";
  Blockly.Msg["COLOUR_RGB_GREEN"] = "ಹಸಿರು";
  Blockly.Msg["COLOUR_RGB_HELPURL"] =
    "https://www.december.com/html/spec/colorpercompact.html"; // untranslated
  Blockly.Msg["COLOUR_RGB_RED"] = "ಕೆಂಪು";
  Blockly.Msg["COLOUR_RGB_TITLE"] = "ಬಣ್ಣದಿಂದ";
  Blockly.Msg["COLOUR_RGB_TOOLTIP"] =
    "ನಿರ್ದಿಷ್ಟ ಪ್ರಮಾಣದಲ್ಲಿ ಕೆಂಪು, ಹಸಿರು ಮತ್ತು ನೀಲಿಯನ್ನು ಹೊಂದಿದ ಒಂದು ಬಣ್ಣವನ್ನು ರಚಿಸಿ. ಎಲ್ಲಾ ಮೌಲ್ಯಗಳು 0 ಮತ್ತು 100 ರ ನಡುವೆ ಇರಲಿ.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks"; // untranslated
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] =
    "ಪುನರಾವರ್ತನೆಯಿಂದ ನಿರ್ಗಮಿಸು";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] =
    "ಲೂಪ್ ಮುಂದಿನ ಪುನರಾವರ್ತನೆಯೊಂದಿಗೆ ಮುಂದುವರೆಯಲಿ";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] =
    "ಒಳಹೊಕ್ಕಿರುವ ಲೂಪಿನಿಂದ ನಿರ್ಗಮಿಸು.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] =
    "ಈ ಲೂಪಿನ ಉಳಿದ ಭಾಗವನ್ನು ಬಿಟ್ಟು, ಮುಂದಿನ ಪುನರಾವರ್ತನೆಯೊಂದಿಗೆ ಮುಂದುವರಿಸಿ.";
  Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] =
    "ಎಚ್ಚರಿಕೆ: ಈ ಬ್ಲಾಕನ್ನು  ಲೂಪ್‌ನಲ್ಲಿ ಮಾತ್ರ ಬಳಸಬಹುದು.";
  Blockly.Msg["CONTROLS_FOREACH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#for-each"; // untranslated
  Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "%2 ಪಟ್ಟಿಯಲ್ಲಿರುವ ಪ್ರತಿ  %1  ಅಂಶಕ್ಕೆ";
  Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] =
    "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಪ್ರತಿಯೊಂದು ಅಂಶಕ್ಕೆ, ಚರಾಂಶ  '%1'ನ್ನು   ಅಂಶಕ್ಕೆ ಜೋಡಿಸಿ, ತದನಂತರ ಕೆಲವು ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡಿ.";
  Blockly.Msg["CONTROLS_FOR_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#count-with"; // untranslated
  Blockly.Msg["CONTROLS_FOR_TITLE"] =
    "%1 ಜೊತೆ ಎಣಿಸು %2 ಇಂದ %3 ತನಕ %4 ಪ್ರಮಾಣದಲ್ಲಿ";
  Blockly.Msg["CONTROLS_FOR_TOOLTIP"] =
    "ಚರಾಂಶವಾದ %1 ಪ್ರಾರಂಭ ಸಂಖ್ಯೆಯಿಂದ ಅಂತಿಮ ಸಂಖ್ಯೆಯವರೆಗೆ ಮೌಲ್ಯಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲಿ, ನಿರ್ದಿಷ್ಟ ಮಧ್ಯಂತರದಿಂದ ಎಣಿಸಿ, ಮತ್ತು ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಬ್ಲಾಕ್ ಗಳನ್ನು  ಮಾಡಲಿ.";
  Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] =
    "'ಆಗಿದ್ದರೆ' ಬ್ಲಾಕ್ ಗೆ ಒಂದು ಷರತ್ತು ಸೇರಿಸಿ.";
  Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] =
    "ಅಂತಿಮವಾದ, ಎಲ್ಲವನ್ನೂ-ಹಿಡಿ ಷರತ್ತನ್ನು 'ಆಗಿದ್ದರೆ' ಬ್ಲಾಕ್ ಗೆ ಸೇರಿಸಿ.";
  Blockly.Msg["CONTROLS_IF_HELPURL"] =
    "https://github.com/google/blockly/wiki/IfElse"; // untranslated
  Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] =
    "ಈ 'ಆಗಿದ್ದರೆ' ಬ್ಲಾಕನ್ನು ಮರು ಸಂರಚಿಸಲು ಅದರ ಭಾಗಗಳನ್ನು ಸೇರಿಸು, ತೆಗೆ ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸು.";
  Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "ಇಲ್ಲದಿದ್ದರೆ";
  Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "ಆಗಿರದಿದ್ದರೆ";
  Blockly.Msg["CONTROLS_IF_MSG_IF"] = "ಆಗಿದ್ದರೆ";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] =
    "ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿದ್ದರೆ, ಕೆಲವು ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡಿ.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] =
    "ಮೌಲ್ಯವು ಸತ್ಯ ಆಗಿದ್ದರೆ, ಮೊದಲನೇ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡು, ಇಲ್ಲವಾದರೆ, ಎರಡನೇ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡು.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] =
    "ಮೊದಲನೇ ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿದ್ದರೆ, ಮೊದಲ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು  ಮಾಡಿ. ಇಲ್ಲದಿದ್ದರೆ, ಎರಡನೇ  ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿದ್ದರೆ, ಎರಡನೇ ವಿಭಾಗದ  ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡಿ.";
  Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] =
    "ಮೊದಲನೆಯ ಮೌಲ್ಯವು ಸತ್ಯ ಆಗಿದ್ದರೆ, ಮೊದಲ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡು. ಇಲ್ಲವಾದರೆ, ಎರಡನೇ ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿದ್ದರೆ, ಎರಡನೇ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡು. ಒಂದುವೇಳೆ ಯಾವುದೇ ಮೌಲ್ಯವೂ ಸತ್ಯವಾಗಿರದಿದ್ದರೆ, ಕೊನೆಯ ವಿಭಾಗದ ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡು.";
  Blockly.Msg["CONTROLS_REPEAT_HELPURL"] =
    "https://en.wikipedia.org/wiki/For_loop"; // untranslated
  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "ಮಾಡು";
  Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "%1 ಬಾರಿ ಪುನರಾವರ್ತಿಸು";
  Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] =
    "ಕೆಲವು ಹೇಳಿಕೆಗಳನ್ನು ಹಲವಾರು ಬಾರಿ ಮಾಡು.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] =
    "https://github.com/google/blockly/wiki/Loops#repeat"; // untranslated
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "ತನಕ ಪುನರಾವರ್ತಿಸು";
  Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] =
    "ಷರತ್ತು 'ಸತ್ಯ' ಆಗಿರುವವರೆಗೆ ಪುನರಾವರ್ತಿಸು";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] =
    "ಮೌಲ್ಯವು ಸುಳ್ಳಾಗಿರುವವರೆಗೆ, ಕೆಲವು ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡಿ.";
  Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] =
    "ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿರುವವರೆಗೆ, ಕೆಲವು ಹೇಳಿಕೆಗಳನ್ನು ಮಾಡಿ.";
  Blockly.Msg["DELETE_ALL_BLOCKS"] = "ಎಲ್ಲಾ %1 ಬ್ಲಾಕ್‍ಗಳನ್ನು ಅಳಿಸುವುದೇ ?";
  Blockly.Msg["DELETE_BLOCK"] = "ಬ್ಲಾಕನ್ನು ಅಳಿಸು";
  Blockly.Msg["DELETE_VARIABLE"] = "'%1' ಚರಾಂಶವನ್ನು ಅಳಿಸು";
  Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] =
    "'%2' ಚರಾಂಶದ  '%1' ಉಪಯೋಗಗಳನ್ನು ಅಳಿಸುವುದೇ ?";
  Blockly.Msg["DELETE_X_BLOCKS"] = "%1 ಬ್ಲಾಕ್‍ಗಳನ್ನು ಅಳಿಸು";
  Blockly.Msg["DIALOG_CANCEL"] = "ರದ್ದುಮಾಡಿ";
  Blockly.Msg["DIALOG_OK"] = "ಸರಿ";
  Blockly.Msg["DISABLE_BLOCK"] = "ಬ್ಲಾಕನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸು";
  Blockly.Msg["DUPLICATE_BLOCK"] = "ಪ್ರತಿ";
  Blockly.Msg["DUPLICATE_COMMENT"] = "ಟಿಪ್ಪಣಿಯ ಪ್ರತಿ ಮಾಡು";
  Blockly.Msg["ENABLE_BLOCK"] = "ಬ್ಲಾಕನ್ನು ಸಕ್ರಿಯಗೊಳಿಸು";
  Blockly.Msg["EXPAND_ALL"] = "ಬ್ಲಾಕ್‍ಗಳನ್ನು ವಿಸ್ತರಿಸು";
  Blockly.Msg["EXPAND_BLOCK"] = "ಬ್ಲಾಕನ್ನು ವಿಸ್ತರಿಸು";
  Blockly.Msg["EXTERNAL_INPUTS"] = "ಬಾಹ್ಯ ಒಳಾಂಶಗಳು";
  Blockly.Msg["HELP"] = "ಸಹಾಯ";
  Blockly.Msg["INLINE_INPUTS"] = "ಸಾಲಿನಲ್ಲಿರುವ ಒಳಾoಶಗಳು";
  Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-empty-list"; // untranslated
  Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "ಖಾಲಿ ಪಟ್ಟಿಯನ್ನು ರಚಿಸಿ";
  Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] =
    "ಯಾವುದೇ ದತ್ತಾಂಶ ದಾಖಲೆಗಳನ್ನು ಹೊಂದಿರದ, 0 ಉದ್ದದ, ಪಟ್ಟಿಯನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "ಪಟ್ಟಿ";
  Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] =
    "ಈ ಪಟ್ಟಿಯ ಬ್ಲಾಕ್ ಅನ್ನು ಮರುಸಂರಚಿಸಲು ವಿಭಾಗಗಳನ್ನು ಸೇರಿಸಿ, ತೆಗೆದುಹಾಕಿ ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸಿ.";
  Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "ಇದರೊಂದಿಗೆ ಪಟ್ಟಿಯನ್ನು ರಚಿಸಿ.";
  Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] =
    "ಪಟ್ಟಿಗೆ ಒಂದು ಅಂಶವನ್ನು ಸೇರಿಸಿ.";
  Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] =
    "ಹಲವು ಅಂಶಗಳೊಂದಿಗೆ ಪಟ್ಟಿಯನ್ನು ರಚಿಸಿ.";
  Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "ಮೊದಲ";
  Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# ಕೊನೆಯಿಂದ";
  Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";
  Blockly.Msg["LISTS_GET_INDEX_GET"] = "ಪಡೆಯಿರಿ";
  Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "ಪಡೆಯಿರಿ ಮತ್ತು ತೆಗೆದುಹಾಕಿ";
  Blockly.Msg["LISTS_GET_INDEX_LAST"] = "ಕೊನೆಯ";
  Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "ಯಾದೃಚ್ಛಿಕ";
  Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "ತೆಗೆ";
  Blockly.Msg["LISTS_GET_INDEX_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಮೊದಲ ಅಂಶವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿ ಇರುವ ಅಂಶವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಕೊನೆಯ ಅಂಶವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಯಾದೃಚ್ಛಿಕ ಅಂಶವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಮೊದಲ ಸ್ಥಾನದಲ್ಲಿನ ಅಂಶವನ್ನು ತೆಗೆದು ಹಾಕುವುದು ಮತ್ತು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿನ ಅಂಶವನ್ನು ತೆಗೆದು ಹಾಕುವುದು ಮತ್ತು ಹಿಂತಿರುಗಿಸುವುದು .";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಕೊನೆಯ ಸ್ಥಾನದಲ್ಲಿನ ಅಂಶವನ್ನು ತೆಗೆದು ಹಾಕುವುದು ಮತ್ತು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಯಾದೃಚ್ಛಿಕ ಸ್ಥಾನದಲ್ಲಿನ ಅಂಶವನ್ನು ತೆಗೆದು ಹಾಕುವುದು ಮತ್ತು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಮೊದಲ ಅಂಶವನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿರುವ ಅಂಶವನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಕೊನೆಯ ಅಂಶವನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.";
  Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಯಾದೃಚ್ಛಿಕ ಅಂಶವನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "ಕೊನೆಯಿಂದ # ವರೆಗೆ";
  Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "# ವರೆಗೆ";
  Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "ಕೊನೆಯವರೆಗೂ";
  Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-a-sublist"; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] =
    "ಮೊದಲಿನಿಂದ ಉಪ-ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] =
    "# ನಿಂದ ಉಪ-ಪಟ್ಟಿಯನ್ನು ಕೊನೆಯಿಂದ ಪಡೆಯಿರಿ";
  Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] =
    "# ನಿಂದ ಉಪ-ಪಟ್ಟಿಯನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = ""; // untranslated
  Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] =
    "ಪಟ್ಟಿಯ ನಿರ್ದಿಷ್ಟ ಭಾಗದ ಪ್ರತಿಯನ್ನು ರಚಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 ಕೊನೆಯ ಅಂಶ ಆಗಿದೆ.";
  Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 ಮೊದಲ ಅಂಶ ಆಗಿದೆ.";
  Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "ಅಂಶದ ಮೊದಲ ಸಂಭವವನ್ನು ಹುಡುಕಿ";
  Blockly.Msg["LISTS_INDEX_OF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list"; // untranslated
  Blockly.Msg["LISTS_INDEX_OF_LAST"] = "ಅಂಶದ ಕೊನೆಯ ಸಂಭವವನ್ನು ಹುಡುಕಿ";
  Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಅಂಶದ ಮೊದಲ/ಕೊನೆಯ ಸಂಭಾವ್ಯದ ಸೂಚಿಯನ್ನು ಹಿಂತಿರುಗಿಸುವುದು. ಅಂಶ ಕಂಡುಬರದಿದ್ದರೆ %1 ಅನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_INLIST"] = "ಪಟ್ಟಿಯಲ್ಲಿ";
  Blockly.Msg["LISTS_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#is-empty"; // untranslated
  Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 ಖಾಲಿಯಾಗಿದೆ";
  Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] =
    "ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದ್ದರೆ ಸತ್ಯ ಎಂದು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#length-of"; // untranslated
  Blockly.Msg["LISTS_LENGTH_TITLE"] = "%1 ರ ಉದ್ದ";
  Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "ಪಟ್ಟಿಯ ಉದ್ದವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LISTS_REPEAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#create-list-with"; // untranslated
  Blockly.Msg["LISTS_REPEAT_TITLE"] =
    "%1 ಅಂಶದೊಂದಿಗೆ %2 ಬಾರಿ  ಪುನರಾವರ್ತಿತಗೊಂಡ ಪಟ್ಟಿಯನ್ನು ರಚಿಸಿ.";
  Blockly.Msg["LISTS_REPEAT_TOOLTIP"] =
    "ಕೊಟ್ಟಿರುವ ಮೌಲ್ಯವನ್ನು ನಿರ್ದಿಷ್ಟ ಬಾರಿ ಪುನರಾವರ್ತಿಸುವ ಪಟ್ಟಿಯನ್ನು ರಚಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#reversing-a-list"; // untranslated
  Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "%1 ನ್ನು ಹಿಮ್ಮುಖಗೊಳಿಸಿ";
  Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "ಪಟ್ಟಿಯ ಪ್ರತಿಯನ್ನು ಹಿಮ್ಮುಖಗೊಳಿಸಿ.";
  Blockly.Msg["LISTS_SET_INDEX_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#in-list--set"; // untranslated
  Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "ಹಾಗೆ";
  Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "ನಲ್ಲಿ ಸೇರಿಸಿ";
  Blockly.Msg["LISTS_SET_INDEX_SET"] = "ಗೊತ್ತುಪಡಿಸಿ";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] =
    "ಪಟ್ಟಿಯ ಪ್ರಾರಂಭದಲ್ಲಿ ಅಂಶವನ್ನು ಸೇರಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿ ಅಂಶವನ್ನು ಸೇರಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] =
    "ಅಂಶವನ್ನು ಪಟ್ಟಿಯ ಕೊನೆಯಲ್ಲಿ ಸೇರಿಸಿ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] =
    "ಅಂಶವನ್ನು ಪಟ್ಟಿಯಲ್ಲಿ ಯಾದೃಚ್ಛಿಕವಾಗಿ  ಒಳಸೇರಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ಮೊದಲ ಅಂಶವನ್ನು ಗೊತ್ತುಪಡಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿ ಅಂಶವನ್ನು ಗೊತ್ತುಪಡಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] =
    "ಪಟ್ಟಿಯಲ್ಲಿ ಕೊನೆಯ ಅಂಶವನ್ನು ಗೊತ್ತುಪಡಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಯಾದೃಚ್ಛಿಕ ಅಂಶವನ್ನು ಗೊತ್ತುಪಡಿಸುತ್ತದೆ.";
  Blockly.Msg["LISTS_SORT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#sorting-a-list"; // untranslated
  Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ಆರೋಹಣ";
  Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "ಅವರೋಹಣ";
  Blockly.Msg["LISTS_SORT_TITLE"] = "%1 %2 %3 ವಿಂಗಡಿಸಿ";
  Blockly.Msg["LISTS_SORT_TOOLTIP"] = "ಪಟ್ಟಿಯ ಪ್ರತಿಯನ್ನು ವಿಂಗಡಿಸಿ.";
  Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] =
    "ವರ್ಣಮಾಲೆಯ, ದೊಡ್ಡಕ್ಷರ/ಸಣ್ಣಕ್ಷರವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ";
  Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "ಸಂಖ್ಯಾತ್ಮಕ";
  Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "ವರ್ಣಮಾಲೆಯ";
  Blockly.Msg["LISTS_SPLIT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists"; // untranslated
  Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "ಪಠ್ಯದಿಂದ ಪಟ್ಟಿಯನ್ನು ಮಾಡಿ";
  Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "ಪಟ್ಟಿಯಿಂದ ಪಠ್ಯವನ್ನು ಮಾಡಿ";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] =
    "ಪ್ರಾರಂಭ ಅಥವಾ ಅಂತ್ಯ ಚಿನ್ಹೆಯಿಂದ ಬೇರ್ಪಡಿಸಲಾಗಿರುವ ಪಠ್ಯಗಳ  ಪಟ್ಟಿಯನ್ನೆಲ್ಲಾ  ಒಂದು ಪಠ್ಯಕ್ಕೆ ಸೇರಿಸಿ.";
  Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] =
    "ಪ್ರಾರಂಭ ಅಥವಾ ಅಂತ್ಯ ಚಿನ್ಹೆಯಲ್ಲಿ ಮುರಿದು, ಪಠ್ಯವನ್ನು ವಿಭಜಿಸಿ ಪಠ್ಯಗಳ ಪಟ್ಟಿಮಾಡಿ.";
  Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "ಪ್ರಾರಂಭ ಅಥವಾ ಅಂತ್ಯ ಚಿನ್ಹೆಯೊಡನೆ";
  Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "ಸುಳ್ಳು";
  Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#values"; // untranslated
  Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] =
    "ಸತ್ಯ ಅಥವಾ ಸುಳ್ಳು  ಎರಡರಲ್ಲಿ ಒಂದನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "ಸತ್ಯ";
  Blockly.Msg["LOGIC_COMPARE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Inequality_(mathematics)"; // untranslated
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] =
    "ಎರಡೂ ಒದಗಿಸುವ ಅಂಶಗಳು ಪರಸ್ಪರ ಸಮನಾಗಿದ್ದರೆ, ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] =
    "ಮೊದಲನೇ ಒದಗಿಸುವ ಅಂಶ ಎರಡನೇ ಒದಗಿಸುವ ಅಂಶಕ್ಕಿಂತ ದೊಡ್ಡದಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] =
    "ಮೊದಲನೇ ಒದಗಿಸುವ ಅಂಶ ಎರಡನೇ ಒದಗಿಸುವ ಅಂಶಕ್ಕಿಂತ ದೊಡ್ಡದು ಅಥವಾ ಸಮನಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] =
    "ಮೊದಲನೇ ಒದಗಿಸುವ ಅಂಶ ಎರಡನೇ ಒದಗಿಸುವ ಅಂಶಕ್ಕಿಂತ ಚಿಕ್ಕದ್ದಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] =
    "ಮೊದಲನೇ ಒದಗಿಸುವ ಅಂಶ ಎರಡನೇ ಒದಗಿಸುವ ಅಂಶಕ್ಕಿಂತ ಚಿಕ್ಕದು ಅಥವಾ ಸಮನಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] =
    "ಎರಡೂ ಒದಗಿಸುವ ಅಂಶಗಳು ಪರಸ್ಪರ ಸಮನಾಗಿರದಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_NEGATE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#not"; // untranslated
  Blockly.Msg["LOGIC_NEGATE_TITLE"] = "%1 ಅಲ್ಲ";
  Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] =
    "ಒದಗಿಸುವ ಅಂಶ ಸುಳ್ಳಾಗಿದ್ದರೆ ಸರಿಯೆನ್ನಿ. ಒದಗಿಸುವ ಅಂಶ ಸತ್ಯವಾಗಿದ್ದರೆ ತಪ್ಪೆನ್ನಿ.";
  Blockly.Msg["LOGIC_NULL"] = "ಶೂನ್ಯ";
  Blockly.Msg["LOGIC_NULL_HELPURL"] =
    "https://en.wikipedia.org/wiki/Nullable_type"; // untranslated
  Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "ಶೂನ್ಯವನ್ನು  ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_OPERATION_AND"] = "ಮತ್ತು";
  Blockly.Msg["LOGIC_OPERATION_HELPURL"] =
    "https://github.com/google/blockly/wiki/Logic#logical-operations"; // untranslated
  Blockly.Msg["LOGIC_OPERATION_OR"] = "ಅಥವಾ";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] =
    "ಒದಗಿಸುವ ಎರಡೂ ಅಂಶಗಳು ಸರಿಯಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] =
    "ಯಾವುದಾದರೂ ಒಂದು ಒದಗಿಸುವ ಅಂಶ ಸತ್ಯವಾಗಿದ್ದರೆ ಸರಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "ಪರೀಕ್ಷೆ";
  Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:"; // untranslated
  Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "ಸುಳ್ಳು ಆಗಿದ್ದರೆ";
  Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "ಸತ್ಯ ಆಗಿದ್ದರೆ";
  Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] =
    "'ಪರೀಕ್ಷೆ'ಯಲ್ಲಿನ ಷರತ್ತನ್ನು ಪರಿಶೀಲಿಸಿ. ಷರತ್ತು ಸರಿಯಾಗಿದ್ದರೆ, 'ಸತ್ಯವಾಗಿದ್ದರೆ' ಮೌಲ್ಯವನ್ನು; ಇಲ್ಲದಿದ್ದರೆ 'ಸುಳ್ಳಾಗಿದ್ದರೆ' ಮೌಲ್ಯವನ್ನೂ ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+"; // untranslated
  Blockly.Msg["MATH_ARITHMETIC_HELPURL"] =
    "https://en.wikipedia.org/wiki/Arithmetic"; // untranslated
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] =
    "ಎರಡು ಸಂಖ್ಯೆಗಳ ಮೊತ್ತವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] =
    "ಎರಡು ಸಂಖ್ಯೆಗಳ ಭಾಗಲಬ್ಧವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] =
    "ಎರಡು ಸಂಖ್ಯೆಗಳ ವ್ಯತ್ಯಾಸವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] =
    "ಎರಡು ಸಂಖ್ಯೆಗಳ ಗುಣಲಬ್ಧವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] =
    "ಮೊದಲ ಸಂಖ್ಯೆಯ ಘಾತಾಂಶ ಎರಡನೇ ಸಂಖ್ಯೆಯಾದಾಗಿನ ಫಲಿತಾಂಶವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2"; // untranslated
  Blockly.Msg["MATH_ATAN2_TITLE"] = "X:%1 Y:%2 ಬಿಂದುವಿನ ಆರ್ಕ್ ಟ್ಯಾನ್";
  Blockly.Msg["MATH_ATAN2_TOOLTIP"] =
    "ಬಿಂದು (X,Y) ನ  ಆರ್ಕ್ ಟ್ಯಾಂಜೆಂಟ್ ನ್ನು -180 ರಿಂದ 180 ರವರೆಗಿನ ಡಿಗ್ರಿಗಳಲ್ಲಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_CHANGE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter"; // untranslated
  Blockly.Msg["MATH_CHANGE_TITLE"] = "%1 ಅನ್ನು %2 ರಿಂದ ಬದಲಾಯಿಸಿ";
  Blockly.Msg["MATH_CHANGE_TOOLTIP"] =
    "ಚರಾಂಶ '%1' ಕ್ಕೆ ಒಂದು ಸಂಖ್ಯೆಯನ್ನು ಸೇರಿಸಿ.";
  Blockly.Msg["MATH_CONSTANT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Mathematical_constant"; // untranslated
  Blockly.Msg["MATH_CONSTANT_TOOLTIP"] =
    "ಸಾಮಾನ್ಯ ಸ್ಥಿರಾಂಕಗಳಲ್ಲಿ ಒಂದನ್ನು ಹಿಂತಿರುಗಿಸಿ:π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
  Blockly.Msg["MATH_CONSTRAIN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Clamping_(graphics)"; // untranslated
  Blockly.Msg["MATH_CONSTRAIN_TITLE"] =
    "%1ಅನ್ನು  ಕಡಿಮೆ %2 ಹೆಚ್ಚಿನ %3  ಮೌಲ್ಯಗಳ ನಡುವೆ  ನಿರ್ಬಂಧಿಸಿ";
  Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] =
    "ನಿಗದಿತ ಮಿತಿಗಳ ನಡುವೆ ಸಂಖ್ಯೆಯನ್ನು ನಿರ್ಬಂಧಿಸಿ(ಒಳಗೊ೦ಡ).";
  Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷"; // untranslated
  Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "ಇದರಿಂದ ಭಾಗಿಸಬಹುದೇ?";
  Blockly.Msg["MATH_IS_EVEN"] = "ಸಮ ಸಂಖ್ಯೆಯೇ?";
  Blockly.Msg["MATH_IS_NEGATIVE"] = "ಋಣಾತ್ಮಕವೇ?";
  Blockly.Msg["MATH_IS_ODD"] = "ಬೆಸ ಸಂಖ್ಯೆಯೇ?";
  Blockly.Msg["MATH_IS_POSITIVE"] = "ಧನಾತ್ಮಕವೇ?";
  Blockly.Msg["MATH_IS_PRIME"] = "ಅವಿಭಾಜ್ಯ ಸಂಖ್ಯೆಯೇ?";
  Blockly.Msg["MATH_IS_TOOLTIP"] =
    "ಒಂದು ಸಂಖ್ಯೆ ಸಮ, ಬೆಸ, ಅವಿಭಾಜ್ಯ, ಪೂರ್ಣ, ಧನಾತ್ಮಕ, ಋಣಾತ್ಮಕವಾಗಿದೆಯೇ ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಸಂಖ್ಯೆಯಿಂದ ಭಾಗಿಸ ಬಹುದೇ ಎಂದು ಪರಿಶೀಲಿಸಿ. ಸತ್ಯ ಅಥವಾ ಸುಳ್ಳು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_IS_WHOLE"] = "ಪೂರ್ಣಸಂಖ್ಯೆಯೇ?";
  Blockly.Msg["MATH_MODULO_HELPURL"] =
    "https://en.wikipedia.org/wiki/Modulo_operation"; // untranslated
  Blockly.Msg["MATH_MODULO_TITLE"] = "%1 ÷ %2 ರ ಶೇಷ";
  Blockly.Msg["MATH_MODULO_TOOLTIP"] =
    "ಎರಡು ಸಂಖ್ಯೆಗಳ ವಿಭಜನೆಯ ಶೇಷವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×"; // untranslated
  Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/Number"; // untranslated
  Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "ಒಂದು ಸಂಖ್ಯೆ.";
  Blockly.Msg["MATH_ONLIST_HELPURL"] = ""; // untranslated
  Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "ಪಟ್ಟಿಯ ಸರಾಸರಿ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "ಪಟ್ಟಿಯ ಗರಿಷ್ಠ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "ಪಟ್ಟಿಯ ಮಧ್ಯಾಂಕ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "ಪಟ್ಟಿಯ ಕನಿಷ್ಠ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ  ಆಗಾಗ್ಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಸಂಖ್ಯೆಗಳು";
  Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "ಪಟ್ಟಿಯ ಯಾದೃಚ್ಛಿತ ಅಂಶ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "ಪಟ್ಟಿಯ ಪ್ರಮಾಣಿತ ವಿಚಲನ";
  Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "ಪಟ್ಟಿಯ ಮೊತ್ತ";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಸಂಖ್ಯಾ ಮೌಲ್ಯಗಳ ಸರಾಸರಿ (ಅಂಕಗಣಿತದ ಸರಾಸರಿ) ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] =
    "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಗರಿಷ್ಠ ಸಂಖ್ಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] =
    "ಪಟ್ಟಿಯಲ್ಲಿನ ಮಧ್ಯಾಂಕ ಸಂಖ್ಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] =
    "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಕನಿಷ್ಠ ಸಂಖ್ಯೆಯನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] =
    "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಸಾಮಾನ್ಯ ಅಂಶಗಳ ಪಟ್ಟಿಯನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] =
    "ಪಟ್ಟಿಯ ಯಾದೃಚ್ಛಿತ ಅಂಶವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] =
    "ಪಟ್ಟಿಯ ಪ್ರಮಾಣಿತ ವಿಚಲನವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] =
    "ಪಟ್ಟಿಯಲ್ಲಿರುವ ಎಲ್ಲಾ ಸಂಖ್ಯೆಗಳ ಮೊತ್ತವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_POWER_SYMBOL"] = "^"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "ಯಾದೃಚ್ಛಿತ ಭಿನ್ನರಾಶಿ";
  Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] =
    "0.0 (ಒಳಗೊಂಡ) ಮತ್ತು 1.0 (ವಿಶೇಷ) ನಡುವೆ ಯಾದೃಚ್ಛಿತ ಭಿನ್ನರಾಶಿಯನ್ನು  ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_RANDOM_INT_HELPURL"] =
    "https://en.wikipedia.org/wiki/Random_number_generation"; // untranslated
  Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "ಯಾದೃಚ್ಛಿತ ಪೂರ್ಣಾಂಕ %1 ರಿಂದ %2 ರವರೆಗೆ";
  Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] =
    "ಎರಡು ನಿರ್ದಿಷ್ಟ ಮಿತಿಗಳ ನಡುವೆ ಇರುವ ಯಾದೃಚ್ಛಿತ ಪೂರ್ಣಾಂಕವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding"; // untranslated
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "ಪೂರ್ಣಾಂಕಗೊಳಿಸು";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] =
    "ಕೆಳಗಿನ-ಅಂಕಕ್ಕೆ ಪೂರ್ಣಾಂಕಗೊಳಿಸಿ";
  Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "ಮೇಲಿನ-ಅಂಕಕ್ಕೆ ಪೂರ್ಣಾಂಕಗೊಳಿಸಿ";
  Blockly.Msg["MATH_ROUND_TOOLTIP"] =
    "ಒಂದು ಸಂಖ್ಯೆಯನ್ನು ಮೇಲಿನ ಅಥವಾ ಕೆಳಗಿನ ಪೂರ್ಣಾಂಕ ಮಾಡಿ.";
  Blockly.Msg["MATH_SINGLE_HELPURL"] =
    "https://en.wikipedia.org/wiki/Square_root"; // untranslated
  Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "ಪರಿಪೂರ್ಣ";
  Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "ವರ್ಗಮೂಲ";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] =
    "ಸಂಖ್ಯೆಯೊಂದರ ಪರಿಪೂರ್ಣ ಮೌಲ್ಯವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] =
    "ಒಂದು ಸಂಖ್ಯೆಯ e ಘಾತವಾಗಿದ್ದಾಗಿನ ಮೌಲ್ಯವನ್ನು  ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] =
    "ಸಂಖ್ಯೆಯ ನೈಸರ್ಗಿಕ ಲಾಗರಿಥಮ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] =
    "ಒಂದು ಸಂಖ್ಯೆಯ ಆಧಾರ 10 ಲಾಗರಿಥಮನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] =
    "ಸಂಖ್ಯೆಯೊಂದರ ನಿರಾಕರಣೆಯನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] =
    "ಒಂದು ಸಂಖ್ಯೆಯ 10ರ ಘಾತವಾಗಿದ್ದಾಗಿನ ಮೌಲ್ಯವನ್ನು  ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "ಸಂಖ್ಯೆಯ ವರ್ಗಮೂಲವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-"; // untranslated
  Blockly.Msg["MATH_TRIG_ACOS"] = "ಆರ್ಕ್-ಕಾಸ್";
  Blockly.Msg["MATH_TRIG_ASIN"] = "ಆರ್ಕ್-ಸೈನ್";
  Blockly.Msg["MATH_TRIG_ATAN"] = "ಆರ್ಕ್-ಟ್ಯಾನ್";
  Blockly.Msg["MATH_TRIG_COS"] = "ಕಾಸ್";
  Blockly.Msg["MATH_TRIG_HELPURL"] =
    "https://en.wikipedia.org/wiki/Trigonometric_functions"; // untranslated
  Blockly.Msg["MATH_TRIG_SIN"] = "ಸೈನ್";
  Blockly.Msg["MATH_TRIG_TAN"] = "ಟ್ಯಾನ್";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] =
    "ಸಂಖ್ಯೆಯೊಂದರ ಆರ್ಕ್ ಕೊಸೈನ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ(ರೇಡಿಯನ್‌ಗಳಲ್ಲ)";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] =
    "ಸಂಖ್ಯೆಯೊಂದರ ಆರ್ಕ್ ಸೈನ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] =
    "ಸಂಖ್ಯೆಯೊಂದರ ಆರ್ಕ್ ಟ್ಯಾಂಜೆಂಟ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ(ರೇಡಿಯನ್‌ಗಳಲ್ಲ)";
  Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] =
    "ಕೋನವೊಂದರ ಕೊಸೈನ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ(ರೇಡಿಯನ್‌ಗಳಲ್ಲ)";
  Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] =
    "ಕೋನವೊಂದರ ಸೈನ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ(ರೇಡಿಯನ್‌ಗಳಲ್ಲ)";
  Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] =
    "ಕೋನವೊಂದರ ಟ್ಯಾಂಜೆಂಟ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸಿ(ರೇಡಿಯನ್‌ಗಳಲ್ಲ)";
  Blockly.Msg["NEW_COLOUR_VARIABLE"] = "ಬಣ್ಣದ ಚರಾಂಶವನ್ನು ಸೃಷ್ಟಿಸು ...";
  Blockly.Msg["NEW_NUMBER_VARIABLE"] = "ಸಂಖ್ಯಾ ಚರಾಂಶವನ್ನು ಸೃಷ್ಟಿಸು ...";
  Blockly.Msg["NEW_STRING_VARIABLE"] = "ಚಿಹ್ನೆಗಳ ಸರಣಿಯ ಚರಾಂಶವನ್ನು ಸೃಷ್ಟಿಸು...";
  Blockly.Msg["NEW_VARIABLE"] = "ಚರಾಂಶವನ್ನು ಸೃಷ್ಟಿಸು ...";
  Blockly.Msg["NEW_VARIABLE_TITLE"] = "ಹೊಸ ಚರಾಂಶದ ಹೆಸರು:";
  Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "ಹೊಸ ಚರಾಂಶದ ಡೇಟಾಪ್ರಕಾರ:";
  Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "ಹೇಳಿಕೆಗಳನ್ನು ಅನುಮತಿಸಿ";
  Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "ಜೊತೆ:";
  Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] =
    "ಬಳಕೆದಾರ-ವ್ಯಾಖ್ಯಾನಿತ ಕಾರ್ಯಘಟಕ '%1'ಅನ್ನು ಚಲಾಯಿಸಿ.";
  Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] =
    "ಬಳಕೆದಾರ-ವ್ಯಾಖ್ಯಾನಿತ ಕಾರ್ಯಘಟಕ '%1'ಅನ್ನು ಚಲಾಯಿಸಿ ಮತ್ತು ಅದರ ಹೊರಾಂಶವನ್ನು ಉಪಯೋಗಿಸಿ";
  Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "ಜೊತೆ:";
  Blockly.Msg["PROCEDURES_CREATE_DO"] = "'%1' ರಚಿಸಿ";
  Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "ಈ ಕಾರ್ಯಘಟಕವನ್ನು ವಿವರಿಸಿ ...";
  Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = ""; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "ಏನಾದರೂ ಮಾಡಿ";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "ಗೆ";
  Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] =
    "ಯಾವುದೇ ಹೊರಾಂಶ ಇಲ್ಲದ ಕಾರ್ಯಘಟಕವನ್ನು ರಚಿಸುತ್ತದೆ.";
  Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] =
    "https://en.wikipedia.org/wiki/Subroutine"; // untranslated
  Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "ಹಿಂತಿರುಗಿಸಿ";
  Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] =
    "ಹೊರಾಂಶ ಇರುವ ಕಾರ್ಯ ಘಟಕವನ್ನು ರಚಿಸುತ್ತದೆ.";
  Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] =
    "ಎಚ್ಚರಿಕೆ: ಈ ಕಾರ್ಯಘಟಕವು ನಕಲಿ ನಿಯತಾಂಕಗಳನ್ನು ಹೊಂದಿದೆ.";
  Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] =
    "ಕಾರ್ಯಘಟಕದ ವ್ಯಾಖ್ಯಾನವನ್ನು ಹೈಲೈಟ್ ಮಾಡಿ";
  Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] =
    "https://c2.com/cgi/wiki?GuardClause"; // untranslated
  Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] =
    "ಒಂದು ಮೌಲ್ಯವು ಸತ್ಯವಾಗಿದ್ದರೆ, ಎರಡನೇ ಮೌಲ್ಯವನ್ನು ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] =
    "ಎಚ್ಚರಿಕೆ: ಈ ಬ್ಲಾಕ್ ಅನ್ನು ಕಾರ್ಯಘಟಕದ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಮಾತ್ರ ಬಳಸಬಹುದು.";
  Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "ಒಳಾoಶದ ಹೆಸರು:";
  Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] =
    "ಕಾರ್ಯಘಟಕಕ್ಕೆ  ಒಳಾoಶವನ್ನು  ಸೇರಿಸಿ.";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "ಒಳಾoಶಗಳು";
  Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] =
    "ಈ ಕಾರ್ಯಕ್ಕೆ ಒಳಾoಶಗಳನ್ನು ಸೇರಿಸಿ, ತೆಗೆದುಹಾಕಿ ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸಿ.";
  Blockly.Msg["REDO"] = "ಮತ್ತೆ ಮಾಡು";
  Blockly.Msg["REMOVE_COMMENT"] = "ಟಿಪ್ಪಣಿ ಅಳಿಸು";
  Blockly.Msg["RENAME_VARIABLE"] = "ಚರಾಂಶವನ್ನು ಮರುಹೆಸರಿಸು...";
  Blockly.Msg["RENAME_VARIABLE_TITLE"] = "ಎಲ್ಲ '%1' ಚರಾಂಶಗಳನ್ನು ಮರುಹೆಸರಿಸು:";
  Blockly.Msg["TEXT_APPEND_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_APPEND_TITLE"] =
    " %1 ಕ್ಕೆ  ಪಠ್ಯ  %2 ನ್ನು ಕೊನೆಯಲ್ಲಿ ಸೇರಿಸಿ.";
  Blockly.Msg["TEXT_APPEND_TOOLTIP"] =
    "'%1' ಚರಾಂಶಕ್ಕೆ  ಕೆಲವು ಪಠ್ಯವನ್ನು ಕೊನೆಯಲ್ಲಿ ಸೇರಿಸಿ.";
  Blockly.Msg["TEXT_CHANGECASE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#adjusting-text-case"; // untranslated
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "ಸಣ್ಣಕ್ಷರಕ್ಕೆ";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "ಶೀರ್ಷಿಕೆಯ ಅಕ್ಷರವಾಗಿ";
  Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "ದೊಡ್ಡಕ್ಷರಕ್ಕೆ";
  Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] =
    "ಪಠ್ಯದ ಪ್ರತಿಯನ್ನು ಪ್ರಸ್ತುತಕ್ಕೆ ವಿರುದ್ಡವಾದ ದೊಡ್ಡಕ್ಷರ ಅಥವಾ ಸಣ್ಣಕ್ಷರದಲ್ಲಿ ಹಿಂತಿರುಗಿಸಿ.";
  Blockly.Msg["TEXT_CHARAT_FIRST"] = "ಮೊದಲ ಅಕ್ಷರವನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_CHARAT_FROM_END"] = "ಕೊನೆಯಿಂದ # ಅಕ್ಷರ  ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_CHARAT_FROM_START"] = "# ಅಕ್ಷರ  ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_CHARAT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-text"; // untranslated
  Blockly.Msg["TEXT_CHARAT_LAST"] = "ಕೊನೆಯ ಅಕ್ಷರವನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_CHARAT_RANDOM"] = "ಯಾದೃಚ್ಛಿತ ಅಕ್ಷರವನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_CHARAT_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_CHARAT_TITLE"] = "ಪಠ್ಯದಲ್ಲಿ %1 %2";
  Blockly.Msg["TEXT_CHARAT_TOOLTIP"] =
    "ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಸ್ಥಾನದಲ್ಲಿನ ಅಕ್ಷರವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TEXT_COUNT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#counting-substrings"; // untranslated
  Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "%2 ರಲ್ಲಿ %1 ಅನ್ನು ಎಣಿಸಿ";
  Blockly.Msg["TEXT_COUNT_TOOLTIP"] =
    "ಬೇರೆ ಕೆಲವು ಪಠ್ಯಗಳಲ್ಲಿ ಕೆಲವು ಪಠ್ಯವು ಎಷ್ಟು ಬಾರಿ ಸಂಭವಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಎಣಿಸಿ.";
  Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] =
    "ಪಠ್ಯಕ್ಕೆ ಒಂದು ಅಂಶವನ್ನು ಸೇರಿಸಿ.";
  Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "ಸೇರಿಸು";
  Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] =
    "ಈ ಬ್ಲಾಕನ್ನು ಮರು ಸಂರಚಿಸಲು ಅದರ ಭಾಗಗಳನ್ನು ಸೇರಿಸು, ತೆಗೆ ಅಥವಾ ಮರುಕ್ರಮಗೊಳಿಸು.";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "ಕೊನೆಯಿಂದ # ಅಕ್ಷರದವರೆಗೆ";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "# ಅಕ್ಷರದವರೆಗೆ";
  Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "ಕೊನೆಯ ಅಕ್ಷರದವರೆಗೆ";
  Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text"; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "ಪಠ್ಯದಲ್ಲಿ";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] =
    "ಮೊದಲ ಅಕ್ಷರದಿಂದ ಉಪಸರಣಿಯನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] =
    "# ಅಕ್ಷರದಿಂದ  ಚಿಹ್ನೆಗಳ ಉಪಸರಣಿಯನ್ನು ಕೊನೆಯಿಂದ  ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] =
    "# ಅಕ್ಷರದಿಂದ ಚಿಹ್ನೆಗಳ ಉಪಸರಣಿಯನ್ನು ಪಡೆಯಿರಿ";
  Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = ""; // untranslated
  Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] =
    "ಪಠ್ಯದ ನಿರ್ದಿಷ್ಟ ಭಾಗವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TEXT_INDEXOF_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#finding-text"; // untranslated
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "ಪಠ್ಯದ ಮೊದಲ ಸಂಭವವನ್ನು ಹುಡುಕಿ";
  Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "ಪಠ್ಯದ ಕೊನೆಯ ಸಂಭವವನ್ನು ಹುಡುಕಿ";
  Blockly.Msg["TEXT_INDEXOF_TITLE"] = "ಪಠ್ಯದಲ್ಲಿ %1 %2 %3";
  Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] =
    "ಎರಡನೇ ಪಠ್ಯದಲ್ಲಿ ಮೊದಲ ಪಠ್ಯದ ಸಂಭಾವ್ಯದ, ಮೊದಲ/ಕೊನೆಯ ಸೂಚ್ಯಂಕವನ್ನು ಹಿಂತಿರುಗಿಸುವುದು. ಪಠ್ಯ ಕಂಡುಬಂದಿಲ್ಲದಿದ್ದರೆ %1 ಅನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TEXT_ISEMPTY_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#checking-for-empty-text"; // untranslated
  Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 ಖಾಲಿಯಿದೆ";
  Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] =
    "ಒದಗಿಸಿದ ಪಠ್ಯ ಖಾಲಿಯಾಗಿದ್ದರೆ  'ಸತ್ಯ' ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TEXT_JOIN_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-creation"; // untranslated
  Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "ಇದರೊಂದಿಗೆ ಪಠ್ಯವನ್ನು ರಚಿಸಿ";
  Blockly.Msg["TEXT_JOIN_TOOLTIP"] =
    "ಹಲವಾರು ಅಂಶಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ಮೂಲಕ ಪಠ್ಯದ ತುಣುಕನ್ನು ರಚಿಸಿ.";
  Blockly.Msg["TEXT_LENGTH_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#text-modification"; // untranslated
  Blockly.Msg["TEXT_LENGTH_TITLE"] = "%1ರ ಉದ್ದ";
  Blockly.Msg["TEXT_LENGTH_TOOLTIP"] =
    "ಒದಗಿಸಿದ ಪಠ್ಯದಲ್ಲಿನ ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆಯನ್ನು (ಖಾಲಿ ಜಾಗ ಒಳಗೊಂಡಂತೆ) ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TEXT_PRINT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#printing-text"; // untranslated
  Blockly.Msg["TEXT_PRINT_TITLE"] = "%1 ಮುದ್ರಿಸಿ";
  Blockly.Msg["TEXT_PRINT_TOOLTIP"] =
    "ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ಪಠ್ಯ, ಸಂಖ್ಯೆ ಅಥವಾ ಇತರ ಮೌಲ್ಯವನ್ನು ಮುದ್ರಿಸಿ.";
  Blockly.Msg["TEXT_PROMPT_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user"; // untranslated
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] =
    "ಬಳಕೆದಾರರಿಗೆ  ಸಂಖ್ಯೆಗಾಗಿ ಜ್ಞಾಪಿಸಿ.";
  Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] =
    "ಬಳಕೆದಾರರಿಗೆ  ಕೆಲವು ಪಠ್ಯಕ್ಕಾಗಿ ಜ್ಞಾಪಿಸಿ.";
  Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "ಸಂದೇಶದೊಂದಿಗೆ ಸಂಖ್ಯೆಗಾಗಿ ಜ್ಞಾಪಿಸಿ";
  Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "ಸಂದೇಶದೊಂದಿಗೆ ಪಠ್ಯಕ್ಕಾಗಿ ಜ್ಞಾಪಿಸಿ";
  Blockly.Msg["TEXT_REPLACE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#replacing-substrings"; // untranslated
  Blockly.Msg["TEXT_REPLACE_MESSAGE0"] =
    "%1 ಅನ್ನು %3 ರಲ್ಲಿ %2 ರೊಂದಿಗೆ ಬದಲಾಯಿಸಿ.";
  Blockly.Msg["TEXT_REPLACE_TOOLTIP"] =
    "ಬೇರೆ ಪಠ್ಯದೊಳಗಿನ ಎಲ್ಲಾ ಕೆಲವು ಪಠ್ಯದ ಸಂಭಾವ್ಯಗಳನ್ನು  ಬದಲಾಯಿಸಿ.";
  Blockly.Msg["TEXT_REVERSE_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#reversing-text"; // untranslated
  Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "%1 ಅನ್ನು ಹಿಮ್ಮುಖಗೊಳಿಸಿ.";
  Blockly.Msg["TEXT_REVERSE_TOOLTIP"] =
    "ಪಠ್ಯದಲ್ಲಿನ ಅಕ್ಷರಗಳ ಕ್ರಮವನ್ನು ಹಿಮ್ಮುಖಗೊಳಿಸಿ.";
  Blockly.Msg["TEXT_TEXT_HELPURL"] =
    "https://en.wikipedia.org/wiki/String_(computer_science)"; // untranslated
  Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "ಒಂದು ಅಕ್ಷರ, ಪದ ಅಥವಾ ಪಠ್ಯದ ಸಾಲು.";
  Blockly.Msg["TEXT_TRIM_HELPURL"] =
    "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces"; // untranslated
  Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] =
    "ಎರಡೂ ಕಡೆಯಿಂದ ಖಾಲಿ ಜಾಗಗಳನ್ನು ಕತ್ತರಿಸಿ ಹಾಕಿ";
  Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] =
    "ಎಡಗಡೆಯಿಂದ ಖಾಲಿ ಜಾಗಗಳನ್ನು ಕತ್ತರಿಸಿ ಹಾಕಿ";
  Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] =
    "ಬಲಗಡೆಯಿಂದ ಖಾಲಿ ಜಾಗಗಳನ್ನು ಕತ್ತರಿಸಿ ಹಾಕಿ";
  Blockly.Msg["TEXT_TRIM_TOOLTIP"] =
    "ಒಂದು ಅಥವಾ ಎರಡೂ ತುದಿಗಳಿಂದ ತೆಗೆದುಹಾಕಲಾದ ಖಾಲಿ ಜಾಗ ಒಳಗೊಂಡಂತೆ ಪಠ್ಯದ ಪ್ರತಿಯನ್ನು ಹಿಂತಿರುಗಿಸುವುದು.";
  Blockly.Msg["TODAY"] = "ಇಂದು";
  Blockly.Msg["UNDO"] = "ಹಿಂದಿನಂತೆ ಮಾಡು";
  Blockly.Msg["UNNAMED_KEY"] = "ಹೆಸರಿಡದ";
  Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "ಅಂಶ";
  Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "'%1 ಬದಲಿಸಿ'  ರಚಿಸಿ";
  Blockly.Msg["VARIABLES_GET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#get"; // untranslated
  Blockly.Msg["VARIABLES_GET_TOOLTIP"] =
    "ಈ ಚರಾಂಶದ ಮೌಲ್ಯವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.";
  Blockly.Msg["VARIABLES_SET"] = "%1 ನ್ನು %2 ಕ್ಕೆ ಬದಲಿಸಿ";
  Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "'%1 ಪಡೆಯಿರಿ' ರಚಿಸಿ";
  Blockly.Msg["VARIABLES_SET_HELPURL"] =
    "https://github.com/google/blockly/wiki/Variables#set"; // untranslated
  Blockly.Msg["VARIABLES_SET_TOOLTIP"] =
    "ಈ ಚರಾಂಶವನ್ನು  ಸೇರಿಸುವ ಅಂಶಕ್ಕೆ ಸಮಾನವಾಗಿ ಬದಲಿಸುತ್ತದೆ.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS"] =
    "'%1' ಹೆಸರಿನ ಚರಾಂಶ ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.";
  Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] =
    "%1' ಹೆಸರಿನ ಚರಾಂಶ ಈಗಾಗಲೇ  '%2' ಡೇಟಾ ಪ್ರಕಾರದಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.";
  Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "ಬ್ಲಾಕ್ಲಿ ಕಾರ್ಯಕ್ಷೇತ್ರ";
  Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "ಏನಾದರು ಹೇಳಿ...";
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
