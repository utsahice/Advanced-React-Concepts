import React, { useState } from 'react'
import './App.css'

import UnoptimizedApp from './App.jsx'
import OptimizedApp from './AppOptimized.jsx'

function ComparisonApp() {
  const [showOptimized, setShowOptimized] = useState(false)

  return (
    <div className='comparison-app'>
      <div className='version-selector'>
        <h1>React Re-render Optimization Comparison</h1>
        <div className='controls'>
          <button
            className={!showOptimized ? 'active' : ''}
            onClick={() => setShowOptimized(false)}
          >
            Show Unoptimized Version
          </button>
          <button
            className={showOptimized ? 'active' : ''}
            onClick={() => setShowOptimized(true)}
          >
            Show Optimized Version
          </button>
        </div>
        <div className='version-info'>
          <h2>{showOptimized ? 'Optimized Version' : 'Unoptimized Version'}</h2>
          <p>
            {showOptimized
              ? 'This version uses React.memo, useMemo, and useCallback to prevent unnecessary re-renders.'
              : 'This version has no optimizations - all components re-render on every state change.'}
          </p>
        </div>
      </div>

      <div className='demo-container'>
        {showOptimized ? <OptimizedApp /> : <UnoptimizedApp />}
      </div>

      <div className='instructions'>
        <h3>How to Test:</h3>
        <ol>
          <li>Open React DevTools in your browser</li>
          <li>Go to the "Profiler" tab</li>
          <li>Click the record button (circle icon)</li>
          <li>Interact with the buttons above</li>
          <li>Stop recording and analyze the results</li>
          <li>Switch between versions and compare</li>
        </ol>

        <h3>What to Look For:</h3>
        <ul>
          <li>
            <strong>Unoptimized:</strong> All components re-render on every
            state change
          </li>
          <li>
            <strong>Optimized:</strong> Only components with changed props
            re-render
          </li>
          <li>
            <strong>Console logs:</strong> Check browser console to see render
            messages
          </li>
          <li>
            <strong>Performance:</strong> Notice the difference in render times
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ComparisonApp
