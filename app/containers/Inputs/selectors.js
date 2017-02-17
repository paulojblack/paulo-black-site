import { createSelector } from 'reselect';

/**
 * Direct selector to the inputs state domain
 */
const selectInputsDomain = () => (state) => state.get('inputs');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Inputs
 */

const makeSelectInputs = () => createSelector(
  selectInputsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInputs;
export {
  selectInputsDomain,
};
