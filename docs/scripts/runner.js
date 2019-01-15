console.log('runner loaded')
MathJax.Hub.Config({
    tex2jax: {inlineMath: [["$&","&$"]]}
  });

Vue.component('step', {
  props:['step', 'id'],
  template:`
  <li class = 'step-block'>
    <span> $&{{step.expression}}&$</span>
    <p>{{step.explanation}}</p>
  </li>
  `
})

Vue.component('foil',{
  props:['foil', 'id'],
  template:`
  <li>
    fart
  </li>
  `
})

Vue.component('problem', {
  props:['problem', 'id'],
  template:`
  <div class='problem-block'>
    <h3>problem {{id+1}}</h3>
    <p> {{problem.description}}</p>
    <ol class='foils' v-if='problem.foils'>
      <foil
        v-for='(foil, index) in problem.foils'
        v-bind:step='step'
        v-bind:id='index'
        v-bind:key='index'
      >
      </foil>
    </ol>
    <h4>steps</h4>
    <ol>
      <step
        v-for='(step, index) in problem.steps'
        v-if='step.expression !="NA"'
        v-bind:step='step'
        v-bind:id='index'
        v-bind:key='index'>
      </step>
    </ol>
  </div>
  `,
})

Vue.component('problem-list',{
  template:`
  <div class='problem-list'>
    <problem
      v-for='(problem, index) in problems'
      v-if="problem.description != 'NA'"
      v-bind:problem='problem'
      v-bind:id='index'
      v-bind:key='index'>
    </problem>
  </div>
  `,
  data:function(){ return {problems:problems}}
})
const list = new Vue({el:'#mainList'})
