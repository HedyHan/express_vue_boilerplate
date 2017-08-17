<template>
    <div>
        <TodoInput @addTodo="onAddTodo"></TodoInput>
        <ul id="todoList">
            <li
                    v-for="todo in todos"
            >
                {{ todo.item }}
            </li>
        </ul>
    </div>
</template>

<script>
    import TodoInput from './TodoInput.vue'

    export default {
        components: {
            TodoInput
        },
        data(){
            return {
                todos:[
                    {
                        item: 'This is a todo list.'
                    }
                ]
            }

        },
        methods: {
            onAddTodo(todo){
                this.todos.push({
                    item: todo
                })
            }
        }
    }
</script>