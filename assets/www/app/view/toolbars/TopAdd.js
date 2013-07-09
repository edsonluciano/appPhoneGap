Ext.define('phonegap.view.toolbars.TopAdd', {
  extend: 'phonegap.view.toolbars.Top',
  xtype: 'topaddbar',

  config: {
    items: [
      {
        ui: 'action',
        text : 'Adicionar',
        id : 'topBarAddId'
      },
      {
        xtype: 'spacer'
      },
      {        
        ui: 'action',
        text: '+ Op��es',
        id: 'topBarInfoId'									
      },
 ] }
}); 