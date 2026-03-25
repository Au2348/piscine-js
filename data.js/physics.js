const getAcceleration = ({ f, m, Δv, Δt, t, d }) => {
  if (f !== undefined && m !== undefined) return f / m
  if (Δv !== undefined && Δt !== undefined) return Δv / Δt
  if (d !== undefined && t !== undefined) return (2 * d) / (t ** 2)
  return "impossible"
}