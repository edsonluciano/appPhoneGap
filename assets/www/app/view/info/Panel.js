Ext.define('phonegap.view.info.Panel', {
  extend: 'Ext.Panel',
  xtype: 'infoPanel',

  requires: [
      'phonegap.view.toolbars.TopBack',
  ],

  config: {
    styleHtmlContent: true,
    html: '<h2></h2>',

    layout: 'fit',

    initComponent: function(){
        this.dockedItems = this.buildDockItems();
        AppPhoneGap.views.info.Panel.superclass.initComponent.apply(this, arguments);
     },

     items: [     
        {
            	 
     items: [     
         {
          xtype: 'topbackbar',
          docked: 'top',
          title: 'Escolha:'
         },
         
         new Ext.Button({
                    text: 'Capturar Imagem',
                    id: 'panelButtonStartImagem'
            }),

         new Ext.Button({
                    text: 'Exibir imagem',
                    id: 'panelButtonShowImagem'
         }),
         new Ext.Button({
             text: 'Verificar Localização',
             id: 'panelButtonStartGPS'
     }),
         new Ext.Panel({
          html: '',
          itemId: 'panelText'
         }),

           ]
         }
     ],
    },
     buildDockItems: function(){
        return [
            this.buildDockTop()
        ];
     },

     buildDockTop: function(){
        return {
            xtype: 'topvoltarbar',
            title: 'Informacoes'
        };
     }

});
