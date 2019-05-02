export default {
  'Build Design System Theme': [
    {
      name: 'Colors',
      description: 'Decide on colors, define colors',
      points: 1
    },
    {
      name: 'Border-radii',
      description: 'Decide on border radii, define',
      points: 1
    },
    {
      name: 'Font',
      description: 'Decide on Font, define, include in public/index.html',
      points: 2
    },
    {
      name: 'Transitions',
      description: 'Define transition-in and transition-out',
      points: 1,
    },
    {
      name: 'Box shadows',
      description: 'Define box-shadows',
      points: 1
    },
  ],
  'Prototype UI Components': [
    {
      name: 'Panel',
      description: 'Panels that occupy all horizontal and vertical space of their outside grid area',
      points: 1,
    },
    {
      name: 'Inputs',
      description: 'Inputs and Input Labels',
      points: 2
    },
    {
      name: 'Buttons',
      description: 'Buttons; hover, active states',
      points: 2
    },
    {
      name: 'Link-Style Buttons',
      description: 'Link-style buttons; hover states',
      points: 2,
    },
    {
      name: 'Link-Style Buttons',
      description: 'Link-style buttons; hover states',
      points: 2,
    },
    {
      name: 'Task Overview progress indicators',
      description: 'Gray progress indicators on the Task Overview components',
      points: 2,
    },
    {
      name: 'Heading',
      description: 'Headings for Task Overview, Task Detail and Subtask Detail',
      points: 1,
    },
  ],
  'Server Boilerplate': [
    {
      name: 'Listener, Entry Point',
      description: 'Body Parser, Logger, Use Routers, Server Listener'
    },
    {
      name: 'Models',
      description: 'Tasks and Subtasks, MongoDB connection',
      points: 2,
    },
    {
      name: 'Routing',
      description: '`/api` router, task and subtask subrouters',
      points: 2,
    },
  ],
  'Seed Database': [
    {
      name: 'Task Seed File',
      description: 'Array of task objects, conforming to model',
      points: 3
    },
    {
      name: 'Subtask Seed',
      description: 'Object of subtask arrays organized by name, conforming to subtask schema',
    }
  ]
}