import { useState } from 'react';
import styles from '../../../styles/MineMiami.module.css';

const MineMiami = ({ setState }) => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };
  return (
    <div className={styles.mine}>
      <h2 className={styles.h2}>Mine MiamiCoin</h2>
      <p>Mining MiamiCoin happens by spending STX in a given Stacks block.</p>

      <p>
        A winner is selected randomly weighted by the miners&#39; proportion of
        contributions of that block.
      </p>
      <p> Rewards can be withdrawn after a 100 block maturity window.</p>
      <input type="checkbox" name="agree" onChange={checkboxHandler}></input>
      <label for="agree">
        I confirm I understand that the City of Miami has not yet officially
        claimed the MiamiCoin protocol contribution.
      </label>
      <div className={styles.buttons}>
        <button
          className={styles.singleBlockButton}
          disabled={!agree}
          style={!agree ? { cursor: 'not-allowed' } : {}}
          onClick={() => {
            setState('Single');
          }}
        >
          Mine a single block
        </button>
        <button
          className={styles.multipleBlockButton}
          disabled={!agree}
          style={!agree ? { cursor: 'not-allowed' } : {}}
          onClick={() => {
            setState('Many');
          }}
        >
          Mine for multiple blocks
        </button>
      </div>
    </div>
  );
};

export default MineMiami;
