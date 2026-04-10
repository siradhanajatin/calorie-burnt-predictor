import React, { useMemo, useState } from 'react'

const Predict = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    gender: 'Male',
    height: '',
    weight: '',
    activity: 'Light',
  })
  const [selectedFood, setSelectedFood] = useState('')
  const [foodList, setFoodList] = useState([])

  const updateField = (field, value) => {
    setFormValues(prev => ({ ...prev, [field]: value }))
  }

  const foodOptions = [
    { name: 'Apple', calories: 95 },
    { name: 'Banana', calories: 105 },
    { name: 'Chicken Breast (100g)', calories: 165 },
    { name: 'Rice (1 cup cooked)', calories: 205 },
    { name: 'Salad (mixed greens)', calories: 20 },
    { name: 'Bread (1 slice)', calories: 80 },
    { name: 'Egg', calories: 70 },
    { name: 'Milk (1 cup)', calories: 150 },
    { name: 'Pasta (1 cup cooked)', calories: 220 },
    { name: 'Orange', calories: 62 },
  ]

  const addFoodItem = () => {
    const food = foodOptions.find(f => f.name === selectedFood)
    if (!food) return
    setFoodList(prev => [...prev, food])
    setSelectedFood('')
  }

  const totalCalories = useMemo(
    () => foodList.reduce((acc, item) => acc + item.calories, 0),
    [foodList]
  )

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_28%),_linear-gradient(180deg,#020617_0%,#111827_100%)] px-6 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(30,58,138,0.22)] backdrop-blur-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Calorie Burn Predictor</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Personal Activity Dashboard</h2>
              </div>
              <div className="inline-flex items-center justify-center rounded-3xl bg-slate-900/80 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
                Apple-inspired
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  type="text"
                  value={formValues.name}
                  onChange={e => updateField('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Age</span>
                <input
                  type="number"
                  value={formValues.age}
                  onChange={e => updateField('age', e.target.value)}
                  placeholder="25"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Weight (kg)</span>
                <input
                  type="number"
                  value={formValues.weight}
                  onChange={e => updateField('weight', e.target.value)}
                  placeholder="72"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Height (cm)</span>
                <input
                  type="number"
                  value={formValues.height}
                  onChange={e => updateField('height', e.target.value)}
                  placeholder="178"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Gender</span>
                <select
                  value={formValues.gender}
                  onChange={e => updateField('gender', e.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Activity level</span>
                <select
                  value={formValues.activity}
                  onChange={e => updateField('activity', e.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option>Light</option>
                  <option>Moderate</option>
                  <option>Intense</option>
                </select>
              </label>
            </div>

            <div className="mt-8 rounded-3xl bg-cyan-500/10 p-4 text-white/80">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Tip</p>
              <p className="mt-2 text-sm leading-6">Select food items from the list to add them to your daily log and track calories.</p>
            </div>
          </section>

          <aside className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.25)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Today’s log</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Added food items</h3>
              </div>
              <span className="rounded-full bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">Live</span>
            </div>

            <div className="flex flex-col gap-3 rounded-[32px] border border-white/10 bg-slate-950/70 p-4 text-slate-300 max-h-[320px] overflow-y-auto">
              {foodList.length > 0 ? (
                foodList.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center justify-between rounded-3xl border border-white/5 bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.calories} kcal</p>
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">Added</span>
                  </div>
                ))
              ) : (
                <div className="grid place-items-center gap-4 text-center text-slate-500">
                  <div className="h-20 w-20 rounded-3xl bg-white/5" />
                  <p className="text-sm">Your food list will appear here. Add items to track the day.</p>
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <select
                value={selectedFood}
                onChange={e => setSelectedFood(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="">Select a food item</option>
                {foodOptions.map(food => (
                  <option key={food.name} value={food.name}>
                    {food.name} ({food.calories} kcal)
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={addFoodItem}
                className="rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Add
              </button>
            </div>
          </aside>
        </div>

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Insight summary</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Daily energy overview</h3>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Updated just now
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:col-span-3">
              <p className="text-sm text-slate-400">Total calories</p>
              <p className="mt-4 text-5xl font-semibold text-white">{totalCalories > 0 ? `${totalCalories.toLocaleString()} kcal` : '--'}</p>
              <p className="mt-3 text-sm text-slate-500">Only the total calories from the added food inputs are shown here.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Predict