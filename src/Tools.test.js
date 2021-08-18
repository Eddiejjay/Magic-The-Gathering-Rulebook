import { sum, ruleParser } from './Tools'

const chapterArray = ['111 jee jee jerry','111 kyllä kyllä','222 pööö' ,'222 hoohoho', '333 hello there', '111 jaahas', '333 fkdsmfeng']
const ruleArray = ['111.3. jee jee jerry','111.3. kyllä kyllä','222.3. pööö' ,'222.3. hoohoho', '333.2. hello there', '111.3. jaahas', '333.2. fkdsmfeng']


test('ruleparser returns correct chapter array', () => {
    const compareArray = ['111 jee jee jerry','111 kyllä kyllä','111 jaahas']
    expect(ruleParser('111',chapterArray,3)).toEqual(compareArray)
  })

  test('ruleparser returns correct rule rray', () => {
    const compareArray = ['111.3. jee jee jerry','111.3. kyllä kyllä','111.3. jaahas']
    expect(ruleParser('111.3.',ruleArray,6)).toEqual(compareArray)
  })