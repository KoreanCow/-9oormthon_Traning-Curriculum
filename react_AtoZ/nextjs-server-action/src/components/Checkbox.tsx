'use client'
import React, { useOptimistic, useTransition } from 'react'
import { Todo } from './TodoList'
import { updateTodo } from '@/lib/actions';


const Checkbox = ({ todo }: { todo: Todo }) => {
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(todo,
    (state: Todo, completed: boolean) => ({ ...state, completed })
  )

  const [isPending, startTransition] = useTransition();
  return (
    <input type='checkbox'
      checked={optimisticTodo.completed}
      id='complted'
      name='completed'
      disabled={isPending}
      onChange={async () => {
        addOptimisticTodo(!todo.completed)
        await updateTodo(todo)
      }
      }
      className='min-w-[2rem] min-h-[2rem]'
    />
  )
}

export default Checkbox
