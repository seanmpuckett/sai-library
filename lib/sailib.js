#!/usr/bin/env node

// Javascript source for sailib transpiled by SAI
//

"use strict";

var prototype=new function() {
this.Constructor=function(){};
this.__tobelocked=[];
this.__tobefrozen=[];
this.__contracts=[];
this.__unverified=true;
this.isof={};
return this;
}();
var $AI=prototype;
// Generated code follows
var __context={"name":"sailib","loader":"SAI.GetSourceFromPaths","path":"src/sailib.sai","mtime":"2018-03-07T19:59:17.938Z","fetched":"2018-03-07T23:45:02.093Z"};
var _FS = require('fs');
var _GLOBAL = {
  instance: 0
};
var isa = prototype.isa = 'SAILib';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SAILib'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "canIterate", "mustIterate", "isObject", "isArray", "isString", "isMergable", "isCollection", "coverage", "assert", "debug_op", "iterator_op", "iterate_op", "kviterate_op", "collect_op", "drain_op", "sort_op", "enlist_op", "entrait_op", "alter_op", "observe_op", "audit_op", "concat_op", "map_op", "filter_op", "reduce_op", "slice_op", "element_op", "clone_op", "overlay_op", "select_op", "update_op", "delete_op", "deepFreeze", "xor_op", "min_op", "max_op", "compare_op", "keys_op", "count_op", "values_op", "newerror", "number_op", "expects_op", "expectsThrow", "finalizePrototype", "create_op_base", "singleton_op", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    debugFunction: console.log,
    _protocache: {},
    _singletoncache: {},
    _coveragecache: {},
    serial_number: undefined,
    create_op: undefined
  };
}
for (var i in $1g()) {
  prototype[i] = undefined;
};
var $2g = prototype.Constructor || function() {};
prototype.Constructor = function() {
  $2g.call(this);
  var t = $1g();
  for (var i in t)
    if (t[i] !== undefined) this[i] = t[i];
};
var $3g = prototype['Instantiate'] || function() {};
prototype['Instantiate'] = function(p) {
  var $_d, $_c, $0, $ = this['Instantiate'] ? this : $bindfail('Instantiate'); {
    if ($0 = ($.serial_number)) {
      $AI.debug_op('re-Instantiating over ' + $.serial_number);
    }
    _GLOBAL.instance = (_GLOBAL.instance || 0) + 1;
    $.serial_number = _GLOBAL.instance;
    $.create_op = $.create_op_base;
  }
};
var $4g = prototype['canIterate'] || function() {};
prototype['canIterate'] = function(p) {
  var $4, $3, $2, $1, _i = p,
    $ = this; {
    if (!(_i)) {
      return (false);
    }
    if ($2 = (_i[Symbol.iterator])) {
      return (true);
    }
    if ($3 = (('function' === typeof(_i)))) {
      return (true);
    }
    if ($4 = (('function' === typeof(_i.next)))) {
      return (true);
    }
    return (false);
  }
};
var $5g = prototype['mustIterate'] || function() {};
prototype['mustIterate'] = function(p) {
  var $7, $6, $5, _i = p,
    $ = this; {
    if (!(_i)) {
      return (false);
    }
    if ($6 = (('function' === typeof(_i.next)))) {
      return (true);
    }
    if ($7 = (('function' === typeof(_i)))) {
      return (true);
    }
    return (false);
  }
};
var $6g = prototype['isObject'] || function() {};
prototype['isObject'] = function(p) {
  var $10, $9, $8, _i = p,
    $ = this; {
    if ($9 = ((_i === null))) {
      return (false);
    }
    if ($10 = (('object' === typeof(_i)))) {
      return (true);
    }
    return (false);
  }
};
var $7g = prototype['isArray'] || function() {};
prototype['isArray'] = function(p) {
  var $_d, $_c, $11, _i = p,
    $ = this; {
    return (Array.isArray(_i));
  }
};
var $8g = prototype['isString'] || function() {};
prototype['isString'] = function(p) {
  var $12, _i = p,
    $ = this; {
    return (('string' === typeof(_i)));
  }
};
var $9g = prototype['isMergable'] || function() {};
prototype['isMergable'] = function(p) {
  var $13, _i = p,
    $ = this['isMergable'] ? this : $bindfail('isMergable'); {
    return (($.isArray(_i) || ($.isObject(_i) || $.canIterate(_i))));
  }
};
var $10g = prototype['isCollection'] || function() {};
prototype['isCollection'] = function(p) {
  var $14, _i = p,
    $ = this['isCollection'] ? this : $bindfail('isCollection'); {
    return (($.isArray(_i) || $.isObject(_i)));
  }
};
var $11g = prototype['coverage'] || function() {};
prototype['coverage'] = function(p, _description) {
  var $_d, $_c, $15, _test = p,
    $ = this['coverage'] ? this : $bindfail('coverage'); {
    var $16 = '' + _description + ' - ' + _test;
    if (!($._coveragecache[$16])) {
      $AI.debug_op('Covered ' + $16);
      $._coveragecache[$16] = true;
    }
  }
};
var $12g = prototype['assert'] || function() {};
prototype['assert'] = function(p, _txt) {
  var _msg, $17, _test = p,
    $ = this; {
    if (!(_test)) {
      _msg = ('SAI: failed assertion ' + _txt);
      throw new Error(_msg);
    }
    return (_test);
  }
};
var $13g = prototype['debug_op'] || function() {};
prototype['debug_op'] = function(p) {
  var $_d, $_c, $21, $20, $19, $18, _o = p,
    $ = this['debug_op'] ? this : $bindfail('debug_op'); {
    try {
      if (undefined === _o) _o = 'undefined';
      if ($19 = (('function' === typeof(_o.next)))) {
        _o = '{possible iterator via .next}';
      } else if ($20 = (('function' === typeof(_o)))) {
        _o = '{function}';
      }
      $.debugFunction(_o);
    } catch ($21) {
      $.debugFunction('SAILib.debug exception: ' + $21.message);
      $.debugFunction(_o);
    }
  }
};
var $14g = prototype['iterator_op'] || function() {};
prototype['iterator_op'] = function(p) {
  var $_d, $_c, $25, $24, $23, $22, _i = p,
    $ = this['iterator_op'] ? this : $bindfail('iterator_op'); {
    if (!(_i)) {
      return (_i);
    }
    if ($23 = (('function' === typeof(_i.next)))) {
      return (_i);
    }
    if ($24 = (('function' === typeof(_i)))) {
      return (_i());
    }
    if ($25 = (_i[Symbol.iterator])) {
      return (_i[Symbol.iterator]());
    }
    return (_i);
  }
};
var $15g = prototype['iterate_op'] || function() {};
prototype['iterate_op'] = function(p) {
  var $_d, $_c, $40, $39, $38, $37, $36, $35, $34, $33, $32, $31, $30, $29, $28, $27, $26, _a = p,
    $ = this['iterate_op'] ? this : $bindfail('iterate_op'); {
    if ($27 = ((undefined === _a))) {
      return (_a);
    }
    if ($28 = ($.mustIterate(_a))) {
      return ($.iterator_op(_a));
    }
    if ($29 = (_a[Symbol.iterator])) {
      return (_a[Symbol.iterator]());
    }
    if ($35 = ($.isArray(_a))) {
      return (function*(p) {
        {
          var $32 = _a,
            $31;
          if (undefined === $32) $32 = [];
          var $33 = $32.length;
          for ($31 = 0; $31 < $33; $31++) {
            $30 = $32[$31];
            yield($30);;
          }
        }
      }());
    }
    if ($40 = ($.isObject(_a))) {
      return (function*(p) {
        {
          var $38 = _a,
            $37 = undefined;
          if (undefined === $38) $38 = {};
          for ($37 in $38) {
            $36 = $38[$37];
            yield([$37, $36]);;
          }
        }
      }());
    }
    return (function*(p) {
      {
        yield(_a);
      }
    }());
  }
};
var $16g = prototype['kviterate_op'] || function() {};
prototype['kviterate_op'] = function(p) {
  var $_d, $_c, $64, $63, $62, $61, $60, $59, $58, $57, $56, $55, $54, $53, $52, $51, $50, $49, $48, $47, $46, $45, $44, $43, $42, $41, _a = p,
    $ = this['kviterate_op'] ? this : $bindfail('kviterate_op'); {
    if (!(_a)) {
      return (function*(p) {
        {;
        }
      }());
    }
    if ($47 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $44 = $AI.iterator_op(_a);
          var $45 = $44.next();
          if (!$45.done)
            for (var $43 = 0; !$45.done; $45 = $44.next()) {
              $42 = $45.value;
              yield([$43, $42]);;
              $43++;
            }
        }
      }());
    }
    if ($53 = (_a[Symbol.iterator])) {
      return (function*(p) {
        {
          var $50 = $AI.iterator_op(_a);
          var $51 = $50.next();
          if (!$51.done)
            for (var $49 = 0; !$51.done; $51 = $50.next()) {
              $48 = $51.value;
              yield([$49, $48]);;
              $49++;
            }
        }
      }());
    }
    if ($59 = ($.isArray(_a))) {
      return (function*(p) {
        {
          var $56 = _a,
            $55;
          if (undefined === $56) $56 = [];
          var $57 = $56.length;
          for ($55 = 0; $55 < $57; $55++) {
            $54 = $56[$55];
            yield([$55, $54]);;
          }
        }
      }());
    }
    if ($64 = ($.isObject(_a))) {
      return (function*(p) {
        {
          var $62 = _a,
            $61 = undefined;
          if (undefined === $62) $62 = {};
          for ($61 in $62) {
            $60 = $62[$61];
            yield([$61, $60]);;
          }
        }
      }());
    }
    return (function*(p) {
      {
        yield([0, _a]);
      }
    }());
  }
};
var $17g = prototype['collect_op'] || function() {};
prototype['collect_op'] = function(p) {
  var $_d, $_c, $71, $70, $69, $68, $67, _a, $66, $65, _i = p,
    $ = this['collect_op'] ? this : $bindfail('collect_op'); {
    if ($66 = ((undefined === _i))) {
      return (_i);
    }
    if (!($.mustIterate(_i))) {
      return (_i);
    }
    _a = [];
    var $69 = $AI.iterator_op(_i);
    var $70 = $69.next();
    if (!$70.done)
      for (var $68 = 0; !$70.done; $70 = $69.next()) {
        $67 = $70.value;
        _a.push($67);;
        $68++;
      }
    return (_a);
  }
};
var $18g = prototype['drain_op'] || function() {};
prototype['drain_op'] = function(p) {
  var $78, $77, $76, $75, $74, $73, $72, _i = p,
    $ = this['drain_op'] ? this : $bindfail('drain_op'); {
    if ($73 = ((undefined === _i))) {
      return (_i);
    }
    if (!($.mustIterate(_i))) {
      return (_i);
    }
    var $76 = $AI.iterator_op(_i);
    var $77 = $76.next();
    if (!$77.done)
      for (var $75 = 0; !$77.done; $77 = $76.next()) {
        $74 = $77.value;;;
        $75++;
      }
  }
};
var $19g = prototype['sort_op'] || function() {};
prototype['sort_op'] = function(p, _fn) {
  var $82, $81, $80, $79, _a = p,
    $ = this['sort_op'] ? this : $bindfail('sort_op'); {
    if ($80 = ($.isArray(_a))) {
      return (_a.slice(0).sort(_fn));
    }
    if ($81 = ($.mustIterate(_a))) {
      return ($.collect_op(_a).sort(_fn));
    }
    if ($82 = ($.isObject(_a))) {
      return ($.values_op(_a).sort(_fn));
    }
    return (_a);
  }
};
var $20g = prototype['enlist_op'] || function() {};
prototype['enlist_op'] = function(p) {
  var $_d, $_c, $96, $95, $94, $93, $92, $91, $90, $89, $88, $87, $86, _out, $85, $84, $83, _a = p,
    $ = this['enlist_op'] ? this : $bindfail('enlist_op'); {
    if ($84 = ((undefined === _a))) {
      return (_a);;
    }
    if ($85 = ($.isArray(_a))) {
      return (_a);;
    }
    _out = [];
    if ($95 = ($.mustIterate(_a))) {
      var $88 = $AI.iterator_op(_a);
      var $89 = $88.next();
      if (!$89.done)
        for (var $87 = 0; !$89.done; $89 = $88.next()) {
          $86 = $89.value;
          _out.push($86);;
          $87++;
        }
    } else if ($96 = ($.isObject(_a))) {
      var $93 = _a,
        $92 = undefined;
      if (undefined === $93) $93 = {};
      for ($92 in $93) {
        $91 = $93[$92];
        _out.push([$92, $91]);;
      }
    } else {
      _out.push(_a);
    }
    return (_out);
  }
};
var $21g = prototype['entrait_op'] || function() {};
prototype['entrait_op'] = function(p) {
  var $_d, $_c, $112, $111, $110, $109, $108, $107, $106, $105, $104, $103, $102, $101, $100, $99, _v, _k, _assign, _out, $98, $97, _a = p,
    $ = this['entrait_op'] ? this : $bindfail('entrait_op'); {
    if ($98 = ((undefined === _a))) {
      return (_a);;
    }
    _out = [];
    _assign = function(p, _v) {
      var _k = p; {
        if ($99 = (((_k !== undefined) && (_v !== undefined)))) {
          _out[_k] = _v;
        }
      }
    };
    if ($110 = ($.mustIterate(_a))) {
      var $102 = $AI.iterator_op(_a);
      var $103 = $102.next();
      if (!$103.done)
        for (var $101 = 0; !$103.done; $103 = $102.next()) {
          $100 = $103.value;
          _assign($100[0], $100[1]);;
          $101++;
        }
    } else if ($111 = ($.isArray(_a))) {
      var $107 = _a,
        $106;
      if (undefined === $107) $107 = [];
      var $108 = $107.length;
      for ($106 = 0; $106 < $108; $106++) {
        $105 = $107[$106];
        _assign($105[0], $105[1]);;
      }
    } else if ($112 = ($.isObject(_a))) {
      return (_a);
    } else {
      _out[_a] = true;
    }
    return (_out);
  }
};
var $22g = prototype['alter_op'] || function() {};
prototype['alter_op'] = function(p, _fn) {
  var $113, _a = p,
    $ = this['alter_op'] ? this : $bindfail('alter_op'); {
    return (_fn(_a));
  }
};
var $23g = prototype['observe_op'] || function() {};
prototype['observe_op'] = function(p, _fn) {
  var $_d, $_c, $114, _a = p,
    $ = this['observe_op'] ? this : $bindfail('observe_op'); {
    _fn(_a);
    return (_a);
  }
};
var $24g = prototype['audit_op'] || function() {};
prototype['audit_op'] = function(p, _fn) {
  var $_d, $_c, $132, $131, $130, $129, $128, $127, $126, $125, $124, $123, $122, $121, $120, $119, $118, $117, $116, $115, _a = p,
    $ = this['audit_op'] ? this : $bindfail('audit_op'); {
    if ($130 = ($.isArray(_a))) {
      var $118 = _a,
        $117;
      if (undefined === $118) $118 = [];
      var $119 = $118.length;
      for ($117 = 0; $117 < $119; $117++) {
        $116 = $118[$117];
        _fn($116, $117);;
      }
    } else if ($131 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $123 = $AI.iterator_op(_a);
          var $124 = $123.next();
          if (!$124.done)
            for (var $122 = 0; !$124.done; $124 = $123.next()) {
              $121 = $124.value;
              _fn($121, $122);
              yield($121);;
              $122++;
            }
        }
      }());
    } else if ($132 = ($.isObject(_a))) {
      var $128 = _a,
        $127 = undefined;
      if (undefined === $128) $128 = {};
      for ($127 in $128) {
        $126 = $128[$127];
        _fn($126, $127);;
      }
    }
    return (_a);
  }
};
var $25g = prototype['concat_op'] || function() {};
prototype['concat_op'] = function(p, _b, _inplace) {
  var $_d, $_c, $174, $173, $172, $171, $170, $169, $168, $167, $166, $165, $164, $163, $162, $161, $160, $159, $158, $157, $156, $155, $154, $153, $152, $151, $150, $149, $148, $147, $146, $145, $144, $143, $142, $141, $140, $139, $138, $137, $136, $135, $134, $133, _a = p,
    $ = this['concat_op'] ? this : $bindfail('concat_op'); {
    if ($136 = ((undefined === _a))) {
      if ($134 = ((undefined === _b))) {
        return (undefined);;
      }
      if ($135 = (($.isArray(_b) || $.mustIterate(_b)))) {
        return (_b);;
      }
      return ([_b]);
    }
    if ($138 = ((undefined === _b))) {
      if ($137 = (($.isArray(_a) || $.mustIterate(_a)))) {
        return (_a);;
      }
      return ([_a]);
    }
    if ($166 = ($.mustIterate(_a))) {
      if ($149 = ($.mustIterate(_b))) {
        return (function*(p) {
          {
            var $141 = $AI.iterator_op(_a);
            var $142 = $141.next();
            if (!$142.done)
              for (var $140 = 0; !$142.done; $142 = $141.next()) {
                $139 = $142.value;
                yield($139);;;
                $140++;
              }
            var $146 = $AI.iterator_op(_b);
            var $147 = $146.next();
            if (!$147.done)
              for (var $145 = 0; !$147.done; $147 = $146.next()) {
                $144 = $147.value;
                yield($144);;;
                $145++;
              }
          }
        }());
      }
      if ($160 = ($.isArray(_b))) {
        _b = $AI.clone_op(_b);
        return (function*(p) {
          {
            var $152 = $AI.iterator_op(_a);
            var $153 = $152.next();
            if (!$153.done)
              for (var $151 = 0; !$153.done; $153 = $152.next()) {
                $150 = $153.value;
                yield($150);;;
                $151++;
              }
            var $157 = _b,
              $156;
            if (undefined === $157) $157 = [];
            var $158 = $157.length;
            for ($156 = 0; $156 < $158; $156++) {
              $155 = $157[$156];
              yield($155);;;
            }
          }
        }());
      }
      return (function*(p) {
        {
          var $163 = $AI.iterator_op(_a);
          var $164 = $163.next();
          if (!$164.done)
            for (var $162 = 0; !$164.done; $164 = $163.next()) {
              $161 = $164.value;
              yield($161);;;
              $162++;
            }
          yield(_b);
        }
      }());
    }
    if ($167 = ((!($.isArray(_a))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
    }
    if ($173 = ($.mustIterate(_b))) {
      var $170 = $AI.iterator_op(_b);
      var $171 = $170.next();
      if (!$171.done)
        for (var $169 = 0; !$171.done; $171 = $170.next()) {
          $168 = $171.value;
          _a.push($168);;;
          $169++;
        }
    } else if ($174 = ($.isArray(_b))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
    }
    return (_a);
  }
};
var $26g = prototype['map_op'] || function() {};
prototype['map_op'] = function(p, _fn) {
  var $_d, $_c, $193, $192, $191, $190, $189, $188, $187, $186, $185, $184, $183, $182, $181, $180, $179, $178, $177, _r, $176, $175, _a = p,
    $ = this['map_op'] ? this : $bindfail('map_op'); {
    if ($176 = ((undefined === _a))) {
      return (_a);;
    }
    if ($182 = ($.isArray(_a))) {
      _r = [];
      var $179 = _a,
        $178;
      if (undefined === $179) $179 = [];
      var $180 = $179.length;
      for ($178 = 0; $178 < $180; $178++) {
        $177 = $179[$178];
        _r[$178] = _fn($177, $178);;;
      }
      return (_r);
    }
    if ($188 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $185 = $AI.iterator_op(_a);
          var $186 = $185.next();
          if (!$186.done)
            for (var $184 = 0; !$186.done; $186 = $185.next()) {
              $183 = $186.value;
              yield(_fn($183, $184));;;
              $184++;
            }
        }
      }());
    }
    if ($193 = ($.isObject(_a))) {
      _r = {};
      var $191 = _a,
        $190 = undefined;
      if (undefined === $191) $191 = {};
      for ($190 in $191) {
        $189 = $191[$190];
        _r[$190] = _fn($189, $190);;;
      }
      return (_r);
    }
    return (_fn(_a, undefined));
  }
};
var $27g = prototype['filter_op'] || function() {};
prototype['filter_op'] = function(p, _fn) {
  var $_d, $_c, $215, $214, $213, $212, $211, $210, $209, $208, $207, $206, $205, $204, $203, $202, $201, $200, $199, $198, $197, $196, _r, $195, $194, _a = p,
    $ = this['filter_op'] ? this : $bindfail('filter_op'); {
    if ($195 = ((undefined === _a))) {
      return (_a);;
    }
    if ($202 = ($.isArray(_a))) {
      _r = [];
      var $199 = _a,
        $198;
      if (undefined === $199) $199 = [];
      var $200 = $199.length;
      for ($198 = 0; $198 < $200; $198++) {
        $197 = $199[$198];
        if ($196 = (_fn($197, $198))) {
          _r.push($197);;
        };;
      }
      return (_r);
    }
    if ($209 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          var $206 = $AI.iterator_op(_a);
          var $207 = $206.next();
          if (!$207.done)
            for (var $205 = 0; !$207.done; $207 = $206.next()) {
              $204 = $207.value;
              if ($203 = (_fn($204, $205))) {
                yield($204);;
              };;
              $205++;
            }
        }
      }());
    }
    if ($215 = ($.isObject(_a))) {
      _r = {};
      var $213 = _a,
        $212 = undefined;
      if (undefined === $213) $213 = {};
      for ($212 in $213) {
        $211 = $213[$212];
        if ($210 = (_fn($211, $212))) {
          _r[$212] = $211;;
        };;
      }
      return (_r);
    }
    return (((_fn(_a, undefined)) ? (_a) : (undefined)));
  }
};
var $28g = prototype['reduce_op'] || function() {};
prototype['reduce_op'] = function(p, _fn, _accum) {
  var $_d, $_c, $228, $227, $226, $225, $224, $223, _init, $222, $221, _step, $220, $219, $218, _k, _l, $217, $216, _a = p,
    $ = this['reduce_op'] ? this : $bindfail('reduce_op'); {
    if ($217 = ((undefined === _a))) {
      return (_a);;
    }
    if ($220 = ($.isArray(_a))) {
      _l = _a.length;
      if (!(_l)) {
        return (_accum);;
      }
      _k = 0;
      if ($218 = ((undefined === _accum))) {
        _accum = _a[_k];
        _k = (_k || 0) + 1;
      }
      var $219;
      while ($219 = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        _k = (_k || 0) + 1;
      }
      return (_accum);
    }
    if ($222 = ($.mustIterate(_a))) {
      return (function*(p) {
        {
          _a = $AI.iterate_op(_a);
          _step = _a.next();
          if (!(_step.done)) {
            _k = 0;
            if ($221 = ((undefined === _accum))) {
              _accum = _step.value;
              _step = _a.next();
              _k = (_k || 0) + 1;
            }
            while (!(_step.done)) {
              _accum = _fn(_accum, _step.value, _k);
              _step = _a.next();
              _k = (_k || 0) + 1;
            }
          }
          yield(_accum);
        }
      }());
    }
    if ($228 = ($.isObject(_a))) {
      _init = (undefined === _accum);
      var $226 = _a,
        $225 = undefined;
      if (undefined === $226) $226 = {};
      for ($225 in $226) {
        $224 = $226[$225];
        if ($223 = (_init)) {
          _accum = $224;
          _init = false;
        } else {
          _accum = _fn(_accum, $224, $225);
        };
      }
      return (_accum);
    }
    return ($.reduce_op([_a], _fn, _accum));
  }
};
var $29g = prototype['slice_op'] || function() {};
prototype['slice_op'] = function(p, _st, _ct) {
  var $_d, $_c, $275, $274, $272, $271, _v, _cache, $270, $269, $268, $267, $266, $265, $264, _keep, _only, _size, _crop, _skip, $263, $262, $261, $260, $259, $258, $257, $256, $255, $254, $253, $252, $251, $250, $249, $248, $247, $246, $245, $244, $243, $242, $241, $240, $239, $238, $237, $236, $235, $234, _len, $233, $232, $231, $230, $229, _a = p,
    $ = this['slice_op'] ? this : $bindfail('slice_op'); {
    if ($230 = ((undefined === _a))) {
      return (_a);;
    }
    if ($242 = ($.isString(_a))) {
      if ($231 = ((_ct === 0))) {
        return ('');
      }
      if ($232 = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
        return (_a);
      }
      if ($233 = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
        return (_a.substring(0, _ct));
      }
      _len = _a.length;
      if ($238 = (((undefined === _st) && (_ct < 0)))) {
        return (_a.substring((_len + _ct), _len));
      } else if ($239 = (((0 === _st) && (_ct < 0)))) {
        return (_a.substring(0, (_len + _ct)));
      } else if ($240 = ((_st > 0))) {
        if ($234 = ((_ct < 0))) {
          return (_a.substring(_st, (_len + _ct)));
        } else if ($235 = ((_ct > 0))) {
          return (_a.substring(_st, (_st + _ct)));
        } else {
          return (_a.substring(_st, _len));
        }
      } else if ($241 = ((_st < 0))) {
        if ($236 = ((_ct < 0))) {
          return (_a.substring((_len + _st), (_len + _ct)));
        } else if ($237 = ((_ct > 0))) {
          return (_a.substring((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.substring((_len + _st), _len));
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    if ($244 = ((_ct === 0))) {
      if ($243 = ($.mustIterate(_a))) {
        return (function*(p) {
          {;;
          }
        });
      } else {
        return ([]);
      }
    }
    if (!(($.mustIterate(_a) || $.isArray(_a)))) {
      _a = [_a];
    }
    if ($246 = (((_ct === undefined) && ((_st === undefined) || (_st === 0))))) {
      if ($245 = ($.isArray(_a))) {
        return ($AI.clone_op(_a));
      } else {
        return (_a);
      }
    }
    if ($254 = (((_ct > 0) && ((_st === undefined) || (_st === 0))))) {
      if ($253 = ($.isArray(_a))) {
        return (_a.slice(0, _ct));
      } else {
        return (function*(p) {
          {
            var $250 = $AI.iterator_op(_a);
            var $251 = $250.next();
            if (!$251.done)
              for (var $249 = 0; !$251.done; $251 = $250.next()) {
                $248 = $251.value;
                if ($247 = (($249 < _ct))) {
                  yield($248);;
                } else {
                  break;;
                };
                $249++;
              }
          }
        }());
      }
    }
    if ($263 = ($.isArray(_a))) {
      _len = _a.length;
      if ($259 = (((undefined === _st) && (_ct < 0)))) {
        return (_a.slice((_len + _ct), _len));
      } else if ($260 = (((0 === _st) && (_ct < 0)))) {
        return (_a.slice(0, (_len + _ct)));
      } else if ($261 = ((_st > 0))) {
        if ($255 = ((_ct < 0))) {
          return (_a.slice(_st, (_len + _ct)));
        } else if ($256 = ((_ct > 0))) {
          return (_a.slice(_st, (_st + _ct)));
        } else {
          return (_a.slice(_st, _len));
        }
      } else if ($262 = ((_st < 0))) {
        if ($257 = ((_ct < 0))) {
          return (_a.slice((_len + _st), (_len + _ct)));
        } else if ($258 = ((_ct > 0))) {
          return (_a.slice((_len + _st), (_len + (_st + _ct))));
        } else {
          return (_a.slice((_len + _st), _len));
        }
      }
      throw new Error('SAI: Bad parameters in call to LIMIT/slice');
    }
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    if ($268 = (((undefined === _st) && (_ct < 0)))) {
      _keep = false;
      _size = (0 - (_ct));
    } else if ($269 = ((_st < 0))) {
      _keep = false;
      _size = (0 - (_st));
      if ($264 = ((_ct < 0))) {
        _crop = (0 - (_ct));
      } else if ($265 = ((_ct > 0))) {
        _crop = (_size - _ct);
      }
    } else if ($270 = ((_st > 0))) {
      _skip = _st;
      if ($266 = ((_ct < 0))) {
        _size = (0 - (_ct));
        _crop = (0 - (_ct));
      } else if ($267 = ((_ct > 0))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      _crop = (0 - (_ct));
    }
    _a = $AI.iterate_op(_a);
    return (function*(p) {
      {
        _cache = [];
        _v = _a.next();
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          _v = _a.next();
        }
        while (!(_v.done)) {
          _cache.push(_v.value);
          if ($274 = ((_cache.length > _size))) {
            var $273 = _cache.shift();
            if ($272 = (_keep)) {
              if ($271 = ((_only <= 0))) {
                return;;
              }
              _only--;
              yield($273);
            }
          }
          _v = _a.next();
        }
        var $275;
        while ($275 = ((_cache.length > _crop))) {
          yield(_cache.shift());
        }
      }
    }());
  }
};
var $30g = prototype['element_op'] || function() {};
prototype['element_op'] = function(p, _index) {
  var $280, $279, $278, $277, $276, _a = p,
    $ = this['element_op'] ? this : $bindfail('element_op'); {
    if ($277 = ((undefined === _a))) {
      return (_a);;
    }
    if ($278 = ($.isArray(_a))) {
      return (_a[_index]);
    }
    if ($279 = ($.mustIterate(_a))) {
      return ($.slice_op(_a, _index, 1).next().value);
    }
    if ($280 = (((_index === 0) || (_index === (0 - (1)))))) {
      return (_a);
    }
    return (undefined);
  }
};
var $31g = prototype['clone_op'] || function() {};
prototype['clone_op'] = function(p) {
  var $287, $286, $285, $284, $283, _b, $282, $281, _a = p,
    $ = this['clone_op'] ? this : $bindfail('clone_op'); {
    if ($282 = ($.isArray(_a))) {
      return (_a.slice(0));
    }
    if ($287 = ($.isObject(_a))) {
      _b = {};
      var $285 = _a,
        $284 = undefined;
      if (undefined === $285) $285 = {};
      for ($284 in $285) {
        $283 = $285[$284];
        _b[$284] = $283;;
      }
      return (_b);
    }
    return (_a);
  }
};
var $32g = prototype['overlay_op'] || function() {};
prototype['overlay_op'] = function(p, _r) {
  var $_d, $_c, $_b, _i, $310, _vr, _vl, $309, $308, $307, $306, $305, $304, $303, $302, $301, $300, $299, $298, $297, $296, $295, $294, $293, $292, _v, $291, $290, $289, $288, _l = p,
    $ = this['overlay_op'] ? this : $bindfail('overlay_op'); {
    if ($289 = ((undefined === _l))) {
      _l = {};
    }
    if ($290 = ((!($.isMergable(_l))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    if ($291 = ((!($.isMergable(_r))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
    }
    if (!($.mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      if ($297 = ($.mustIterate(_r))) {
        return (function*(p) {
          {
            _r = $AI.iterate_op(_r);
            _v = _r.next();
            var $294 = _l,
              $293;
            if (undefined === $294) $294 = [];
            var $295 = $294.length;
            for ($293 = 0; $293 < $295; $293++) {
              $292 = $294[$293];
              if (!(_v.done)) {
                yield(((undefined !== ($_b = _v.value)) ? $_b : $292));
                _v = _r.next();
              } else {
                yield($292);
              };
            }
          }
        }());
      }
      if ($309 = ($.isObject(_r))) {
        var $301 = _r,
          $300 = undefined;
        if (undefined === $301) $301 = {};
        for ($300 in $301) {
          $299 = $301[$300];
          if ($298 = (($299 !== undefined))) {
            _l[$300] = $299;
          };
        }
      } else {
        var $306 = _r,
          $305;
        if (undefined === $306) $306 = [];
        var $307 = $306.length;
        for ($305 = 0; $305 < $307; $305++) {
          $304 = $306[$305];
          if ($303 = (($304 !== undefined))) {
            _l[$305] = $304;
          };
        }
      }
      return (_l);
    }
    _l = $AI.iterate_op(_l);
    if ($310 = ($.mustIterate(_r))) {
      _r = $AI.iterate_op(_r);
      return (function*(p) {
        {
          _vl = _l.next();
          _vr = _r.next();
          while (!(_vr.done)) {
            yield((((_vr.value === undefined)) ? (_vl.value) : (_vr.value)));
            _vl = _l.next();
            _vr = _r.next();
          }
          yield*(_l);
        }
      }());
    }
    _r = $AI.clone_op(_r);
    return (function*(p) {
      {
        _i = 0;
        _v = _l.next();
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          _i = (_i || 0) + 1;
          _v = _l.next();
        }
      }
    }());
  }
};
var $33g = prototype['select_op'] || function() {};
prototype['select_op'] = function(p, _manifest) {
  var $_d, $_c, $369, $368, $367, $366, $365, $364, $363, $362, $361, $360, $359, $358, $357, $356, $355, $354, $353, $352, $351, $350, $349, $348, $347, $346, $345, $344, $343, _i, $342, $341, $340, $339, $338, $337, $336, $335, $334, $333, $332, $331, $330, $329, _buffer, _l, $328, $327, $326, $325, $324, $323, $322, $321, $320, $319, $318, $317, $316, $315, $314, $313, _result, $312, $311, _src = p,
    $ = this['select_op'] ? this : $bindfail('select_op'); {
    if (!($.isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
    }
    if (!($.isMergable(_manifest))) {
      if ($312 = ((undefined === _manifest))) {
        return (_manifest);;
      }
      _manifest = [_manifest];
    }
    if ($350 = ($.isArray(_src))) {
      if ($323 = ($.isArray(_manifest))) {
        _result = [];
        var $315 = _manifest,
          $314;
        if (undefined === $315) $315 = [];
        var $316 = $315.length;
        for ($314 = 0; $314 < $316; $314++) {
          $313 = $315[$314];
          _result.push(_src[$313]);;
        }
        return (_result);
      } else if ($324 = ($.mustIterate(_manifest))) {
        _src = $AI.clone_op(_src);
        return (function*(p) {
          {
            var $320 = $AI.iterator_op(_manifest);
            var $321 = $320.next();
            if (!$321.done)
              for (var $319 = 0; !$321.done; $321 = $320.next()) {
                $318 = $321.value;
                yield(_src[$318]);;
                $319++;
              }
          }
        }());
      }
      _result = [];
      var $327 = _manifest,
        $326 = undefined;
      if (undefined === $327) $327 = {};
      for ($326 in $327) {
        $325 = $327[$326];
        _result.push(_src[$326]);;
      }
      return (_result);
    } else if ($351 = ($.mustIterate(_src))) {
      if ($335 = ($.mustIterate(_manifest))) {
        _src = $AI.iterate_op(_src);
        return (function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $332 = $AI.iterator_op(_manifest);
            var $333 = $332.next();
            if (!$333.done)
              for (var $331 = 0; !$333.done; $333 = $332.next()) {
                $330 = $333.value;
                var $329;
                while ($329 = (((!(_l.done)) && (_buffer.length <= $330)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$330]);;
                $331++;
              }
          }
        }());
      }
      if ($342 = ($.isArray(_manifest))) {
        _manifest = $AI.clone_op(_manifest);
        _src = $AI.iterate_op(_src);
        return (function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $339 = _manifest,
              $338;
            if (undefined === $339) $339 = [];
            var $340 = $339.length;
            for ($338 = 0; $338 < $340; $338++) {
              $337 = $339[$338];
              var $336;
              while ($336 = (((!(_l.done)) && (_buffer.length <= $337)))) {
                _buffer.push(_l.value);
                _l = _src.next();
              }
              yield(_buffer[$337]);;
            }
          }
        }());
      }
      _manifest = $AI.sort_op(($AI.map_op($AI.keys_op(_manifest), function($_v, $_k) {
        return ($AI.number_op($_v))
      })), function(a, b) {
        var aa, bb;
        aa = a;
        bb = b;
        if (aa < bb) return -1;
        if (aa > bb) return 1;
        return 0;
      });
      return (function*(p) {
        {
          _i = 0;
          var $347 = $AI.iterator_op(_src);
          var $348 = $347.next();
          if (!$348.done)
            for (var $346 = 0; !$348.done; $348 = $347.next()) {
              $345 = $348.value;
              if ($344 = (($346 === _manifest[_i]))) {
                yield($345);
                _i = (_i || 0) + 1;
                if ($343 = ((_i >= _manifest.length))) {
                  return;;
                }
              };
              $346++;
            }
        }
      }());
    }
    if ($358 = ($.mustIterate(_manifest))) {
      _src = $AI.clone_op(_src);
      return (function*(p) {
        {
          var $355 = $AI.iterator_op(_manifest);
          var $356 = $355.next();
          if (!$356.done)
            for (var $354 = 0; !$356.done; $356 = $355.next()) {
              $353 = $356.value;
              if ($352 = (($353 !== undefined))) {
                yield(_src[$353]);
              };
              $354++;
            }
        }
      }());
    }
    _result = {};
    if ($364 = ($.isArray(_manifest))) {
      var $361 = _manifest,
        $360;
      if (undefined === $361) $361 = [];
      var $362 = $361.length;
      for ($360 = 0; $360 < $362; $360++) {
        $359 = $361[$360];
        _result[$359] = _src[$359];;
      }
      return (_result);
    }
    if ($369 = ($.isObject(_manifest))) {
      var $367 = _manifest,
        $366 = undefined;
      if (undefined === $367) $367 = {};
      for ($366 in $367) {
        $365 = $367[$366];
        _result[$366] = _src[$366];;
      }
    } else {
      _result[_manifest] = _src[_manifest];
    }
    return (_result);
  }
};
var $34g = prototype['update_op'] || function() {};
prototype['update_op'] = function(p, _manifest) {
  var $390, $389, $388, $387, $386, $385, $384, $383, $382, $381, $380, $379, $378, $377, $376, $375, $374, $373, $372, $371, $370, _dest = p,
    $ = this['update_op'] ? this : $bindfail('update_op'); {
    if ($371 = ((undefined === _dest))) {
      _dest = {};
    }
    if (!(($.isArray(_dest) || $.isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
    }
    if (!($.isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
    }
    if ($389 = ($.mustIterate(_manifest))) {
      var $375 = $AI.iterator_op(_manifest);
      var $376 = $375.next();
      if (!$376.done)
        for (var $374 = 0; !$376.done; $376 = $375.next()) {
          $373 = $376.value;
          if ($372 = (($373 !== undefined))) {
            _dest[$374] = $373;;
          };
          $374++;
        }
    } else if ($390 = ($.isArray(_manifest))) {
      var $381 = _manifest,
        $380;
      if (undefined === $381) $381 = [];
      var $382 = $381.length;
      for ($380 = 0; $380 < $382; $380++) {
        $379 = $381[$380];
        if ($378 = (($379 !== undefined))) {
          _dest[$380] = $379;;
        };
      }
    } else {
      var $387 = _manifest,
        $386 = undefined;
      if (undefined === $387) $387 = {};
      for ($386 in $387) {
        $385 = $387[$386];
        if ($384 = (($385 !== undefined))) {
          _dest[$386] = $385;;
        };
      }
    }
    return (_dest);
  }
};
var $35g = prototype['delete_op'] || function() {};
prototype['delete_op'] = function(p, _manifest) {
  var $_d, $_c, $421, $420, $419, $418, $417, $416, $415, $414, $413, $412, $411, $410, $409, $408, $407, $406, $405, $404, $403, $402, $401, $400, $399, $398, $397, $396, $395, $394, $393, _deletel, _ignore, _deleter, _index, _splicer, $392, $391, _dest = p,
    $ = this['delete_op'] ? this : $bindfail('delete_op'); {
    if ($392 = ($.mustIterate(_dest))) {
      throw new Error('SAI: Attempt to DELETE from an iterator, which is not presently supported.');
    }
    if (!($.isObject(_dest))) {
      throw new Error('SAI: Attempt to DELETE from something that\'s not a list or traits.');
    }
    _splicer = function(p) {
      var _index = p; {
        if (!((_index === undefined))) {
          _dest.splice(_index, 1);
        }
      }
    };
    _deleter = function(p, _index) {
      var _ignore = p; {
        if (!((_index === undefined))) {
          delete _dest[_index];
        }
      }
    };
    _deletel = function(p, _ignore) {
      var _index = p; {
        if (!((_index === undefined))) {
          delete _dest[_index];
        }
      }
    };
    if ($421 = ($.isArray(_dest))) {
      if (!($.isMergable(_manifest))) {
        _splicer(_manifest);
      } else if ($405 = ($.isArray(_manifest))) {
        var $394 = _manifest,
          $393;
        if (undefined === $394) $394 = [];
        var $395 = $394.length;
        for ($393 = 0; $393 < $395; $393++) {
          _splicer($394[$393], $393, $394);
        }
      } else if ($406 = ($.mustIterate(_manifest))) {
        var $398 = $AI.iterator_op(_manifest);
        var $399 = $398.next();
        var $397 = 0;
        if (!$399.done)
          do {
            _splicer($399.value, $397);
            $397++;
            $399 = $398.next();
          } while (!$399.done);
      } else {
        var $403 = _manifest,
          $402 = undefined;
        if (undefined === $403) $403 = {};
        for ($402 in $403) {
          $401 = $403[$402];
          let _index = parseInt($402);
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
          };
        }
      }
    } else {
      if (!($.isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if ($418 = ($.isArray(_manifest))) {
        var $408 = _manifest,
          $407;
        if (undefined === $408) $408 = [];
        var $409 = $408.length;
        for ($407 = 0; $407 < $409; $407++) {
          _deletel($408[$407], $407, $408);
        }
      } else if ($419 = ($.mustIterate(_manifest))) {
        var $412 = $AI.iterator_op(_manifest);
        var $413 = $412.next();
        var $411 = 0;
        if (!$413.done)
          do {
            _deletel($413.value, $411);
            $411++;
            $413 = $412.next();
          } while (!$413.done);
      } else if ($420 = ($.isObject(_manifest))) {
        var $416 = _manifest,
          $415 = undefined;
        if (undefined === $416) $416 = {};
        for ($415 in $416) {
          _deleter($416[$415], $415, $416);
        }
      } else {
        delete _dest[_manifest];
      }
    }
    return (_dest);
  }
};
var $36g = prototype['deepFreeze'] || function() {};
prototype['deepFreeze'] = function(p) {
  var $_d, $_c, $429, $428, $427, $426, $425, $424, $423, $422, _o = p,
    $ = this['deepFreeze'] ? this : $bindfail('deepFreeze'); {
    Object.freeze(_o);
    var $428 = _o,
      $427 = undefined;
    if (undefined === $428) $428 = {};
    for ($427 in $428) {
      $426 = $428[$427];
      if ($423 = ((!(_o.hasOwnProperty($427))))) {
        continue;;
      }
      if ($424 = (('object' !== typeof($426)))) {
        continue;;
      }
      if ($425 = (Object.isFrozen($426))) {
        continue;;
      }
      $.deepFreeze($426);;
    }
  }
};
var $37g = prototype['xor_op'] || function() {};
prototype['xor_op'] = function(p, _b) {
  var $430, _a = p,
    $ = this['xor_op'] ? this : $bindfail('xor_op'); {
    return (((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false)))));
  }
};
var $38g = prototype['min_op'] || function() {};
prototype['min_op'] = function(p, _b) {
  var $431, _a = p,
    $ = this['min_op'] ? this : $bindfail('min_op'); {
    return ((((_a < _b)) ? (_a) : (_b)));
  }
};
var $39g = prototype['max_op'] || function() {};
prototype['max_op'] = function(p, _b) {
  var $432, _a = p,
    $ = this['max_op'] ? this : $bindfail('max_op'); {
    return ((((_a > _b)) ? (_a) : (_b)));
  }
};
var $40g = prototype['compare_op'] || function() {};
prototype['compare_op'] = function(p, _b) {
  var $435, $434, $433, _a = p,
    $ = this['compare_op'] ? this : $bindfail('compare_op'); {
    if ($434 = ((_a < _b))) {
      return ((0 - (1)));;
    }
    if ($435 = ((_a > _b))) {
      return (1);;
    }
    return (0);
  }
};
var $41g = prototype['keys_op'] || function() {};
prototype['keys_op'] = function(p) {
  var $_d, $_c, $452, $451, $450, $449, $448, $447, $446, $445, $444, $443, $442, $441, $440, $439, $438, $437, _result, $436, _a = p,
    $ = this['keys_op'] ? this : $bindfail('keys_op'); {
    _result = [];
    if ($450 = ($.isArray(_a))) {
      var $437 = 0,
        $438 = _a.length,
        $439 = 1;
      if ($439 <= 0) throw new Error("SAI Runtime: Infinite looping COUNT detected.");
      for (; $437 < $438; $437 = $437 + $439) {
        _result.push($437);;
      }
    } else if ($451 = ($.mustIterate(_a))) {
      var $443 = $AI.iterator_op(_a);
      var $444 = $443.next();
      if (!$444.done)
        for (var $442 = 0; !$444.done; $444 = $443.next()) {
          $441 = $444.value;
          _result.push($442);;
          $442++;
        }
    } else if ($452 = ($.isObject(_a))) {
      var $448 = _a,
        $447 = undefined;
      if (undefined === $448) $448 = {};
      for ($447 in $448) {
        $446 = $448[$447];
        _result.push($447);;
      }
    }
    return (_result);
  }
};
var $42g = prototype['count_op'] || function() {};
prototype['count_op'] = function(p) {
  var $466, $465, $464, $463, $462, $461, $460, $459, $458, $457, $456, $455, _i, $454, $453, _a = p,
    $ = this['count_op'] ? this : $bindfail('count_op'); {
    if ($454 = ($.isArray(_a))) {
      return (_a.length);
    }
    _i = 0;
    if ($460 = ($.mustIterate(_a))) {
      var $457 = $AI.iterator_op(_a);
      var $458 = $457.next();
      if (!$458.done)
        for (var $456 = 0; !$458.done; $458 = $457.next()) {
          $455 = $458.value;
          _i = (_i || 0) + 1;;
          $456++;
        }
      return (_i);
    }
    if ($465 = ($.isObject(_a))) {
      var $463 = _a,
        $462 = undefined;
      if (undefined === $463) $463 = {};
      for ($462 in $463) {
        $461 = $463[$462];
        _i = (_i || 0) + 1;;
      }
      return (_i);
    }
    if ($466 = ((_a === undefined))) {
      return (0);
    }
    return (1);
  }
};
var $43g = prototype['values_op'] || function() {};
prototype['values_op'] = function(p) {
  var $_d, $_c, $475, $474, $473, $472, $471, $470, _result, $469, $468, $467, _a = p,
    $ = this['values_op'] ? this : $bindfail('values_op'); {
    if ($468 = ($.isArray(_a))) {
      return ($AI.clone_op(_a));
    }
    if ($469 = ($.mustIterate(_a))) {
      return ($.collect_op(_a));
    }
    _result = [];
    if ($474 = ($.isObject(_a))) {
      var $472 = _a,
        $471 = undefined;
      if (undefined === $472) $472 = {};
      for ($471 in $472) {
        $470 = $472[$471];
        _result.push($470);;
      }
      return (_result);
    }
    if ($475 = ((undefined !== _a))) {
      _result.push(_a);
    }
    return (_result);
  }
};
var $44g = prototype['newerror'] || function() {};
prototype['newerror'] = function(p, _file, _parameters) {
  var $480, $479, $478, $477, _e, $476, _line = p,
    $ = this['newerror'] ? this : $bindfail('newerror'); {
    _e = new Error(_parameters.message, _file, _line);
    var $479 = _parameters,
      $478 = undefined;
    if (undefined === $479) $479 = {};
    for ($478 in $479) {
      $477 = $479[$478];
      _e[$478] = $477;;
    }
    return (_e);
  }
};
var $45g = prototype['number_op'] || function() {};
prototype['number_op'] = function(p) {
  var _n, $481, _x = p,
    $ = this['number_op'] ? this : $bindfail('number_op'); {
    _n = parseFloat(_x);
    return (((isNaN(_n)) ? (0) : (_n)));
  }
};
var $46g = prototype['expects_op'] || function() {};
prototype['expects_op'] = function(p, _prototype) {
  var $_d, $_c, $490, $489, $488, $487, $486, $485, $484, $483, _type, _name, _param, _tester, _result, $482, _params = p,
    $ = this['expects_op'] ? this : $bindfail('expects_op'); {
    _result = [];
    _tester = function(p, _name, _type) {
      var _param = p; {
        if ($484 = ((_type === typeof(_param)))) {;
        } else if ($485 = ((_param.isof && _param.isof[_type]))) {;
        } else {
          if ($483 = (_param.isa)) {
            _result.push({
              trait: _name,
              'expects': _type,
              found: _param.isa
            });
          } else {
            _result.push({
              trait: _name,
              'expects': _type,
              found: typeof(_param)
            });
          }
        }
      }
    };
    var $489 = _prototype,
      $488 = undefined;
    if (undefined === $489) $489 = {};
    for ($488 in $489) {
      _type = $489[$488];
      if ($486 = (($488 === '_root'))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params[$488])) {
        _result.push({
          trait: $488,
          'expects': _type,
          found: 'undefined'
        });
      } else if ($487 = ((_type !== true))) {
        _tester(_params[$488], $488, _type);
      };
    }
    return (_result);
  }
};
var $47g = prototype['expectsThrow'] || function() {};
prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $_d, $_c, $495, $494, $493, $492, _err, _x, $491, _params = p,
    $ = this['expectsThrow'] ? this : $bindfail('expectsThrow'); {
    _x = $.expects_op(_params, _prototype);
    if (!(_x.length)) {
      return;;
    }
    _err = [];
    var $494 = _x,
      $493 = undefined;
    if (undefined === $494) $494 = {};
    for ($493 in $494) {
      $492 = $494[$493];
      _err.push('' + $492.trait + ' should be ' + $492.expects + ' but is instead ' + $492.found);;
    }
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
  }
};
var $48g = prototype['finalizePrototype'] || function() {};
prototype['finalizePrototype'] = function(p) {
  var $_d, $_c, $511, $510, _obj, $509, $508, $507, $506, $505, $504, $503, $502, $501, $500, $499, $498, $497, $496, _proto = p,
    $ = this['finalizePrototype'] ? this : $bindfail('finalizePrototype'); {
    var $499 = _proto.__tobelocked,
      $498 = undefined;
    if (undefined === $499) $499 = {};
    for ($498 in $499) {
      $497 = $499[$498];
      Object.defineProperty(_proto, $497, {
        configurable: false
      });;
    }
    delete _proto.__tobelocked;
    var $503 = _proto.__tobefrozen,
      $502 = undefined;
    if (undefined === $503) $503 = {};
    for ($502 in $503) {
      $501 = $503[$502];
      $.deepFreeze(_proto[$501]);;
    }
    delete _proto.__tobefrozen;
    if ($509 = (_proto.__unverified)) {
      var $507 = _proto.__contracts,
        $506 = undefined;
      if (undefined === $507) $507 = {};
      for ($506 in $507) {
        $505 = $507[$506];
        if (!(_proto.hasOwnProperty($505))) {
          throw new Error('SAI: Contractually required trait ' + $505 + ' does not exist in object ' + _proto.isa + '.');
        };
      }
      delete _proto.__unverified;
      delete _proto.__contracts;
    }
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        if ($510 = (_obj.Constructor)) {
          _obj.Constructor();;
        }
        if ($511 = (_obj.Instantiate)) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        return (_obj);
      }
    };
  }
};
var $49g = prototype['create_op_base'] || function() {};
prototype['create_op_base'] = function(p, _parameters) {
  var $_d, $_c, $515, $514, _obj, _mod, $513, _src, _fn, _proto, $512, _name = p,
    $ = this['create_op_base'] ? this : $bindfail('create_op_base'); {
    _proto = $._protocache[_name];
    if (!(_proto)) {
      _fn = (_name + '.js');
      _src = _FS.readFileSync(_fn, 'utf8');
      if ($513 = ($AI.slice_op((('#!' === _src)), 0, 2))) {
        _src = _src.replace(/\#\![^\r\n\u0085\u2028\u2029]+/, '');
      }
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      _mod = eval(_src);
      _proto = _mod({}, require, {}, _fn, __dirname);
      $._protocache[_name] = _proto;
    }
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
    }
    _obj = Object.create(_proto);
    if ($514 = (_obj.Constructor)) {
      _obj.Constructor();;
    }
    if ($515 = (_obj.Instantiate)) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    return (_obj);
  }
};
var $50g = prototype['singleton_op'] || function() {};
prototype['singleton_op'] = function(p, _parameters) {
  var $_d, $_c, $516, _name = p,
    $ = this['singleton_op'] ? this : $bindfail('singleton_op'); {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    return ($._singletoncache[_name]);
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
