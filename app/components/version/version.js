'use strict';

angular.module('suitableTask.version', [
  'suitableTask.version.interpolate-filter',
  'suitableTask.version.version-directive'
])

.value('version', '0.1');
