Ext.define('phonegap.view.contato.Form', {
  extend: 'Ext.form.Panel',
  xtype: 'formcontato',
  
  requires: [
    'Ext.form.FieldSet',
  ],
  
  config:{
    layout : 'fit',
    scroll : true,
    items: [ 
      {
        xtype: 'fieldset',
          items: [
              {
                  xtype : 'textfield',
                  name : 'nome',
                  label : 'Nome:',
                  placeHolder : 'Nome do animal',
                  required : true
              },
              {
                  xtype : 'textfield',
                  name : 'sobrenome',
                  label : 'Espécie:',
                  placeHolder : 'Espécie',
                  required : true
              },
              {
                  xtype : 'numberfield',
                  name : 'email',
                  label : 'Idade:',
                  placeHolder : 'Idade do animal',
                  required : true
              },
              {
                  xtype : 'textfield',
                  name : 'telefone',
                  label : 'Dono:',
                  placeHolder : 'Nome do Dono',
                  required : true
              }
          ]
      }
    ]
  }
});
