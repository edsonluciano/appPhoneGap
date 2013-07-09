Ext.define('phonegap.view.contato.Editor', {
  extend: 'Ext.Panel',
  xtype: 'contatoEditor',
  
  requires: [
      'phonegap.view.toolbars.TopBack',
      'phonegap.view.toolbars.BottomForm',
      'phonegap.view.contato.Form'
  ],
  
  config: {
    styleHtmlContent: true,
    fullscreen: true,
    scroll : true,
    layout : 'fit',
    
    items: [
     {
       xtype: 'topbackbar',
       docked: 'top',
       title: 'Novo Registro'
     },
      {
        xtype: 'formcontato',
        id: 'formContatoId'
      },
      {
        docked: 'bottom',
        xtype: 'bottomform',
      }
    ],
  }
});
