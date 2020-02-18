<template>
  <div>
    <h1>{{$store.state.title}}</h1>
    <h1>{{$store.state.content}}</h1>
  </div>
</template>

<script>
  export default {
    fetch(context){
      return context.$axios
        .get('http://localhost:8000/api/users')
        .then((res)=>{
          context.store.commit('test', res.data);
        })
        .catch((err)=>{
          context.error({
            statusCode: 404,
            message: 'Страница не найдена'
          })
        });
    }
  }
</script>
