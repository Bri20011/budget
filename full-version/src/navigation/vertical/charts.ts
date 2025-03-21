export default [
  { heading: 'Presupuesto' },
  {
    // title: 'Charts',
    title: 'Presupuesto',
    icon: { icon: 'bx-chart' },
    children: [
      { title: 'Cliente', to: 'budget-customer' },
      { title: 'Color', to: 'budget-color' },
      { title: 'Presupuesto', to: 'budget-budget' },
      { title: 'Empleado', to: 'budget-employee' },
      { title: 'Producto', to: 'budget-product' },
      { title: 'Proveedor', to: 'budget-supplier' },

    ],
  },
]
