
import {Level} from './variable';
import {Treatment} from './experimental-design';

export class AnalysisSpecification {  }

export class DataSetSpecification {
  filters: Filter[];
  projections: Projection[];
}

export class Filter{}

export class gropingFilter extends Filter{
  group: String;
}

export class TratmentFilter{
  treatment: Treatment[];
}

export class Projection{
  variables: String[];
}

export class GroupingProjection extends Projection {}

export class StatisticalTestAssertion { }

export class StatisticalAnalysisSpec {
  analyses: Statistic[];
}

export class Statistic {
  datasetSpecification: DataSetSpecification;
}

export class DescriptiveStatistic extends Statistic {}

export class CentralTendencyMeasure extends DescriptiveStatistic {}

export class DispersionMeasure extends DescriptiveStatistic {}

export class AnalysisResult {}

export class StatisticalAnalysisResult extends AnalysisResult{
  datasetSpecification: DataSetSpecification;
}

export class DescriptiveStatisticValues extends StatisticalAnalysisResult {
  descriptiveStatistic: DescriptiveStatistic;
  value: Level;
}

export class InferentialStatistic extends Statistic {}


export class ConfidenceInterfval extends InferentialStatistic {
  confidenceLevel: number;
}

export class CorrelationCoefficient extends InferentialStatistic {
  name: String;
}

export class NHST extends InferentialStatistic {
  test: String;
  statisticalDistribution: String;
  alpha: number;
}
 
export class PValue extends StatisticalAnalysisResult {
  value: number;
  freedomDegrees: number;
  nhst: NHST;
}

export class EffectSizeEstimator extends InferentialStatistic {
  name:String;
}

export class EffectSizeEstimate extends StatisticalAnalysisResult{
  
}