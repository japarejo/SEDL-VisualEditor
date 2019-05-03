import {Goal} from './goal'
import {Abstract} from './abstract'
import {ExperimentalContext} from './experimental-context'

export class EmpiricalStudy {
  metaId: String;
  name: String;
  version: String;
  goal: Goal;
  abstract: Abstract;
  context: ExperimentalContext;
}