Ext.define('phonegap.store.Contatos', {
  extend: 'Ext.data.Store',
   requires: [
        'phonegap.model.Contato',
        'phonegap.proxy.ContatoSQLite',
   ],
    config: {
      storeId: "Contatos",
      model : 'phonegap.model.Contato',
      autoLoad : true,


  }
});
