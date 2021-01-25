import { useState } from 'react';

function Currency(props) {
  const [usd, setUsd] = useState(0);
  const [twd, setTwd] = useState(0);
  return (
    <div>
      <div>
        <label
          htmlFor="usd"
        >
          Amount of USD
        </label>
        <input
          name="usd"
          id="usd"
          type="number"
          min="0"
          value={usd}
          onChange={(event) => setUsd(event.target.value)}
        />
        {usd}
      </div>
      <div>
        <label
          htmlFor="twd"
        >
          Amount of TWD
        </label>
        <input
          name="twd"
          id="twd"
          type="number"
          min="0"
          value={twd}
          onChange={(event) => setTwd(event.target.value)}
        />
        {twd}
      </div>
    </div>
  );
}
export default Currency;
