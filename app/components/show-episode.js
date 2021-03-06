import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  actions: {
    edit(){
      if (this.get('session.isAuthenticated')) {
        this.toggleProperty('isEditing');
      }else {
        alert("Sign up or log in to edit an episode")
      }
    }, 

    submit(){
      let episode = this.get('episode')
      this.attrs.triggerUpdate(episode);
      this.toggleProperty('isEditing');
    }, 

    destroy(){
      if (this.get('session.isAuthenticated')) {
        let episode = this.get('episode');
        episode.destroyRecord();
        this.attrs.triggerTransition(episode);
      }else {
        alert("Sign up or log in to delete an episode")
      }
    }, 

    onSelectChange(selection, value){
      let episode = this.get('episode')
      this.attrs.triggerSelectSeason(selection, episode);
    }, 

    cancelEdit(){
      this.toggleProperty('isEditing');
    }
  }
});


