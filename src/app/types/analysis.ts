
import {Level} from './variable';

export class AnalysisSpecification {  }

export class StatisticalTestAssertion { }

export class StatisticalAnalysisSpec {
  analyses: Statistic[];
}

export class Statistic {}

export class DescriptiveStatistic extends Statistic {}

export class CentralTendencyMeasure extends DescriptiveStatistic {}

export class DispersionMeasure extends DescriptiveStatistic {}

export class AnalysisResult {}

export class StatisticalAnalysisResult extends AnalysisResult{}

export class DescriptiveStatisticValues {
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

export class EffectSizeEstimator extends InferentialStatistic {
  name:String;
}