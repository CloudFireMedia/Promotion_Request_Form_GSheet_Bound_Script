var SCRIPT_NAME = 'Promotion Request Form (Responses) - GSheet Bound Script'
var SCRIPT_VERSION = 'v0.dev_ajr'

//var documentConfig = {
//  changeLog : {
//    watchSheets : ['Change Log']
//  },
//};//leave blank (or commentout) to disable changelog

// PL.updateConfig({responseForm:documentConfig});//push config options to library

function onOpen()            {PRR.onOpen()}

// function onEdit(e)           {PL.onEdit(e)}//disable while debugging ot you'll only see this in the execution transcript
//function onEdit_Triggered(e) {PL.onEdit_responseForm_Triggered(e)}