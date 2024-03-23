import { cucumberEventProtocolAdapter } from './CucumberEventProtocolAdapter';
import { Dependencies } from './Dependencies';

export = function (dependencies: Dependencies) {
    const { After, AfterAll } = dependencies.cucumber;

    After(function () {
        dependencies.notifier.currentScenarioFinishes();

        return dependencies.serenity.waitForNextCue();
    });

    AfterAll(function () {
        dependencies.notifier.testRunFinishes();

        return dependencies.serenity.waitForNextCue()
            .then(() => {
                dependencies.notifier.testRunFinished();
            });
    });

    return cucumberEventProtocolAdapter(dependencies);
};
