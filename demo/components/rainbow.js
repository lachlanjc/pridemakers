function Rainbow() {
  return (
    <div
      role="img"
      aria-label="rainbow"
      style={{
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        height: '4rem',
        display: 'block',
        backgroundImage:
          'linear-gradient(#ec3750 0%, #ec3750 16.6666%, #ff8c37 16.6666%, #ff8c37 33.333%, #f1c40f 33.333%, #f1c40f 50%, #33d6a6 50%, #33d6a6 66.6666%, #338eda 66.6666%, #338eda 83.3333%, #8067C3 83.3333%, #8067C3 100%)'
      }}
    />
  )
}

export default Rainbow
