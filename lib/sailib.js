"use strict";

var prototype=new function(){
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
var __context={"name":"sailib","loader":"SAI.GetSourceFromPaths","path":"src/sailib.sai","mtime":"2018-02-10T16:53:48.076Z","fetched":"2018-02-10T16:53:55.311Z"};
var _FS = require('fs');
var _G = {
  ct: 0
};
var isa = prototype.isa = 'SAILib';
prototype.isof['SAILib'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'canIterate'", "'mustIterate'", "'isObject'", "'isArray'", "'isMergable'", "'isCollection'", "'coverage'", "'assert'", "'debug_op'", "'iterator_op'", "'iterate_op'", "'kviterate_op'", "'collect_op'", "'drain_op'", "'sort_op'", "'enlist_op'", "'entrait_op'", "'alter_op'", "'observe_op'", "'audit_op'", "'concat_op'", "'map_op'", "'filter_op'", "'reduce_op'", "'slice_op'", "'element_op'", "'clone_op'", "'overlay_op'", "'select_op'", "'update_op'", "'delete_op'", "'deepFreeze'", "'xor_op'", "'min_op'", "'max_op'", "'compare_op'", "'keys_op'", "'count_op'", "'values_op'", "'newerror'", "'number_op'", "'expects_op'", "'expectsThrow'", "'finalizePrototype'", "'create_op_base'", "'singleton_op'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  return {
    debugFunction: console.log,
    _protocache: {},
    _singletoncache: {},
    _coveragecache: {}
  };
}
for (var i in $1g()) {
  prototype[i] = "uninitialized instance attribute";
};
var $2g = prototype.Constructor || function() {};
prototype.Constructor = function() {
  $2g.call(this);
  var t = $1g();
  for (var i in t) this[i] = t[i];
};
var $3g = prototype['Instantiate'];
prototype['Instantiate'] = function(p) {
  var $_d, $_c, $0, $ = this; {
    _G.ct++;
    if (($0 = ($.serial_number))) {
      $AI.debug_op('re-Instantiating over ' + $.serial_number);
    }
    $.serial_number = _G.ct;
    $.create_op = $.create_op_base;
  }
};
var $4g = prototype['canIterate'];
prototype['canIterate'] = function(p) {
  var $4, $3, $2, $1, _i = p,
    $ = this; {
    if (!(_i)) {
      return false;
    }
    if (($2 = (_i[Symbol.iterator]))) {
      return true;
    }
    if (($3 = (('function' === typeof(_i))))) {
      return true;
    }
    if (($4 = (('function' === typeof(_i.next))))) {
      return true;
    }
    return false;
  }
};
var $5g = prototype['mustIterate'];
prototype['mustIterate'] = function(p) {
  var $7, $6, $5, _i = p,
    $ = this; {
    if (!(_i)) {
      return false;
    }
    if (($6 = (('function' === typeof(_i.next))))) {
      return true;
    }
    if (($7 = (('function' === typeof(_i))))) {
      return true;
    }
    return false;
  }
};
var $6g = prototype['isObject'];
prototype['isObject'] = function(p) {
  var $10, $9, $8, _i = p,
    $ = this; {
    if (($9 = ((_i === null)))) {
      return false;
    }
    if (($10 = (('object' === typeof(_i))))) {
      return true;
    }
    return false;
  }
};
var $7g = prototype['isArray'];
prototype['isArray'] = function(p) {
  var $_d, $_c, $11, _i = p,
    $ = this; {
    return Array.isArray(_i);
  }
};
var $8g = prototype['isMergable'];
prototype['isMergable'] = function(p) {
  var $12, _i = p,
    $ = this; {
    return ($.isArray(_i) || ($.isObject(_i) || $.canIterate(_i)));
  }
};
var $9g = prototype['isCollection'];
prototype['isCollection'] = function(p) {
  var $13, _i = p,
    $ = this; {
    return ($.isArray(_i) || $.isObject(_i));
  }
};
var $10g = prototype['coverage'];
prototype['coverage'] = function(p, _description) {
  var $_d, $_c, $14, _test = p,
    $ = this; {
    var $15 = '' + _description + ' - ' + _test;
    if (!($._coverageCache[$15])) {
      $AI.debug_op('Covered ' + $15);
      $._coverageCache[$15] = true;
    }
  }
};
var $11g = prototype['assert'];
prototype['assert'] = function(p, _message) {
  var $_b, _msg, _Error, $16, _test = p,
    $ = this; {
    if (!(_test)) {
      throw new _Error('SAI: failed assertion: ' + ((undefined !== ($_b = _msg)) ? $_b : ''));
    }
  }
};
var $12g = prototype['debug_op'];
prototype['debug_op'] = function(p) {
  var $_d, $_c, $20, $19, $18, $17, _o = p,
    $ = this; {
    try {
      if (undefined === _o) _o = 'undefined';
      if (($18 = (('function' === typeof(_o.next))))) {
        _o = '{possible iterator via .next}';
      } else if (($19 = (('function' === typeof(_o))))) {
        _o = '{function}';
      }
      $.debugFunction(_o);
    } catch ($20) {
      $.debugFunction('SAILib.debug exception: ' + $20.message);
      $.debugFunction(_o);
    }
  }
};
var $13g = prototype['iterator_op'];
prototype['iterator_op'] = function(p) {
  var $_d, $_c, $24, $23, $22, $21, _i = p,
    $ = this; {
    if (!(_i)) {
      return _i;
    }
    if (($22 = (('function' === typeof(_i.next))))) {
      return _i;
    }
    if (($23 = (('function' === typeof(_i))))) {
      return _i();
    }
    if (($24 = (_i[Symbol.iterator]))) {
      return _i[Symbol.iterator]();
    }
    return _i;
  }
};
var $14g = prototype['iterate_op'];
prototype['iterate_op'] = function(p) {
  var $_d, $_c, $43, $42, $41, $40, $39, $36, $35, $34, $33, $32, $28, $27, $26, $25, _a = p,
    $ = this; {
    if (($26 = ((undefined === _a)))) {
      return _a;
    }
    if (($27 = ($.mustIterate(_a)))) {
      return $.iterator_op(_a);
    }
    if (($28 = (_a[Symbol.iterator]))) {
      return _a[Symbol.iterator]();
    }
    if (($36 = ($.isArray(_a)))) {
      return function*(p) {
        {
          var $34 = _a;
          if (undefined === $34) $34 = [];
          var $31 = $34.length;
          if ($31) {
            var $32, $33 = 0;
            for (; $33 < $31; $33++) {
              $32 = $34[$33];
              yield($32);
            }
          }
        }
      }();
    }
    if (($43 = ($.isObject(_a)))) {
      return function*(p) {
        {
          var $41 = _a;
          if (undefined === $41) $41 = [];
          for (var $40 in $41) {
            var $39 = $41[$40];
            yield([$40, $39]);
          }
        }
      }();
    }
    return function*(p) {
      {
        yield(_a);
      }
    }();
  }
};
var $15g = prototype['kviterate_op'];
prototype['kviterate_op'] = function(p) {
  var $_d, $_c, $71, $70, $69, $68, $67, $64, $63, $62, $61, $60, $56, $55, $54, $53, $50, $49, $48, $47, $44, _a = p,
    $ = this; {
    if (!(_a)) {
      return function*(p) {
        {;
        }
      }();
    }
    if (($50 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $45 = $AI.iterator_op(_a),
            $46 = $45.next();
          if (!$46.done)
            for (var $48 = 0; !$46.done; $46 = $45.next(), $48++) {
              $47 = $46.value;
              yield([$48, $47]);;
            }
        }
      }();
    }
    if (($56 = (_a[Symbol.iterator]))) {
      return function*(p) {
        {
          var $51 = $AI.iterator_op(_a),
            $52 = $51.next();
          if (!$52.done)
            for (var $54 = 0; !$52.done; $52 = $51.next(), $54++) {
              $53 = $52.value;
              yield([$54, $53]);;
            }
        }
      }();
    }
    if (($64 = ($.isArray(_a)))) {
      return function*(p) {
        {
          var $62 = _a;
          if (undefined === $62) $62 = [];
          var $59 = $62.length;
          if ($59) {
            var $60, $61 = 0;
            for (; $61 < $59; $61++) {
              $60 = $62[$61];
              yield([$61, $60]);
            }
          }
        }
      }();
    }
    if (($71 = ($.isObject(_a)))) {
      return function*(p) {
        {
          var $69 = _a;
          if (undefined === $69) $69 = [];
          for (var $68 in $69) {
            var $67 = $69[$68];
            yield([$68, $67]);
          }
        }
      }();
    }
    return function*(p) {
      {
        yield([0, _a]);
      }
    }();
  }
};
var $16g = prototype['collect_op'];
prototype['collect_op'] = function(p) {
  var $_d, $_c, $78, $77, $76, _a, $73, $72, _i = p,
    $ = this; {
    if (($73 = ((undefined === _i)))) {
      return _i;
    }
    if (!($.mustIterate(_i))) {
      return _i;
    }
    _a = [];
    var $74 = $AI.iterator_op(_i),
      $75 = $74.next();
    if (!$75.done)
      for (var $77 = 0; !$75.done; $75 = $74.next(), $77++) {
        $76 = $75.value;
        _a.push($76);;
      }
    return _a;
  }
};
var $17g = prototype['drain_op'];
prototype['drain_op'] = function(p) {
  var $85, $84, $83, $80, $79, _i = p,
    $ = this; {
    if (($80 = ((undefined === _i)))) {
      return _i;
    }
    if (!($.mustIterate(_i))) {
      return _i;
    }
    var $81 = $AI.iterator_op(_i),
      $82 = $81.next();
    if (!$82.done)
      for (var $84 = 0; !$82.done; $82 = $81.next(), $84++) {
        $83 = $82.value;;;
      }
  }
};
var $18g = prototype['sort_op'];
prototype['sort_op'] = function(p, _fn) {
  var $89, $88, $87, $86, _a = p,
    $ = this; {
    if (($87 = ($.isArray(_a)))) {
      return _a.slice(0).sort(_fn);
    }
    if (($88 = ($.mustIterate(_a)))) {
      return $.collect_op(_a).sort(_fn);
    }
    if (($89 = ($.isObject(_a)))) {
      return $.values_op(_a).sort(_fn);
    }
    return _a;
  }
};
var $19g = prototype['enlist_op'];
prototype['enlist_op'] = function(p) {
  var $_d, $_c, $105, $104, $103, $102, $101, $98, $97, $96, $95, _out, $92, $91, $90, _a = p,
    $ = this; {
    if (($91 = ((undefined === _a)))) {
      return _a;;
    }
    if (($92 = ($.isArray(_a)))) {
      return _a;;
    }
    _out = [];
    if (($98 = ($.mustIterate(_a)))) {
      var $93 = $AI.iterator_op(_a),
        $94 = $93.next();
      if (!$94.done)
        for (var $96 = 0; !$94.done; $94 = $93.next(), $96++) {
          $95 = $94.value;
          _out.push($95);;
        }
    } else if (($105 = ($.isObject(_a)))) {
      var $103 = _a;
      if (undefined === $103) $103 = [];
      for (var $102 in $103) {
        var $101 = $103[$102];
        _out.push([$102, $101]);
      }
    } else {
      _out.push(_a);
    }
    return _out;
  }
};
var $20g = prototype['entrait_op'];
prototype['entrait_op'] = function(p) {
  var $_d, $_c, $123, $122, $121, $120, $119, $118, $114, $113, $112, $111, $108, _v, _k, _assign, _out, $107, $106, _a = p,
    $ = this; {
    if (($107 = ((undefined === _a)))) {
      return _a;;
    }
    _out = [];
    _assign = function(p, _v) {
      var _k = p; {
        if (($108 = (((_k !== undefined) && (_v !== undefined))))) {
          _out[_k] = _v;
        }
      }
    };
    if (($114 = ($.mustIterate(_a)))) {
      var $109 = $AI.iterator_op(_a),
        $110 = $109.next();
      if (!$110.done)
        for (var $112 = 0; !$110.done; $110 = $109.next(), $112++) {
          $111 = $110.value;
          _assign($111[0], $111[1]);;
        }
    } else if (($122 = ($.isArray(_a)))) {
      var $120 = _a;
      if (undefined === $120) $120 = [];
      var $117 = $120.length;
      if ($117) {
        var $118, $119 = 0;
        for (; $119 < $117; $119++) {
          $118 = $120[$119];
          _assign($118[0], $118[1]);
        }
      }
    } else if (($123 = ($.isObject(_a)))) {
      return _a;
    } else {
      _out[_a] = true;
    }
    return _out;
  }
};
var $21g = prototype['alter_op'];
prototype['alter_op'] = function(p, _fn) {
  var $124, _a = p,
    $ = this; {
    return _fn(_a);
  }
};
var $22g = prototype['observe_op'];
prototype['observe_op'] = function(p, _fn) {
  var $_d, $_c, $125, _a = p,
    $ = this; {
    _fn(_a);
    return _a;
  }
};
var $23g = prototype['audit_op'];
prototype['audit_op'] = function(p, _fn) {
  var $_d, $_c, $147, $146, $145, $144, $143, $140, $139, $138, $137, $134, $133, $132, $131, $130, $126, _a = p,
    $ = this; {
    if (($134 = ($.isArray(_a)))) {
      var $132 = _a;
      if (undefined === $132) $132 = [];
      var $129 = $132.length;
      if ($129) {
        var $130, $131 = 0;
        for (; $131 < $129; $131++) {
          $130 = $132[$131];
          _fn($130, $131);
        }
      }
    } else if (($140 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $135 = $AI.iterator_op(_a),
            $136 = $135.next();
          if (!$136.done)
            for (var $138 = 0; !$136.done; $136 = $135.next(), $138++) {
              $137 = $136.value;
              _fn($137, $138);
              yield($137);;
            }
        }
      }();
    } else if (($147 = ($.isObject(_a)))) {
      var $145 = _a;
      if (undefined === $145) $145 = [];
      for (var $144 in $145) {
        var $143 = $145[$144];
        _fn($143, $144);
      }
    }
    return _a;
  }
};
var $24g = prototype['concat_op'];
prototype['concat_op'] = function(p, _b, _inplace) {
  var $_d, $_c, $191, $190, $189, $188, $187, $184, $183, $182, $181, $180, $177, $176, $175, $174, $173, $169, $168, $167, $164, $163, $162, $161, $158, $157, $156, $153, $152, $151, $150, $149, $148, _a = p,
    $ = this; {
    if (($151 = ((undefined === _a)))) {
      if (($149 = ((undefined === _b)))) {
        return undefined;;
      }
      if (($150 = (($.isArray(_b) || $.mustIterate(_b))))) {
        return _b;;
      }
      return [_b];
    }
    if (($153 = ((undefined === _b)))) {
      if (($152 = (($.isArray(_a) || $.mustIterate(_a))))) {
        return _a;;
      }
      return [_a];
    }
    if (($183 = ($.mustIterate(_a)))) {
      if (($164 = ($.mustIterate(_b)))) {
        return function*(p) {
          {
            var $154 = $AI.iterator_op(_a),
              $155 = $154.next();
            if (!$155.done)
              for (var $157 = 0; !$155.done; $155 = $154.next(), $157++) {
                $156 = $155.value;
                yield($156);;;
              }
            var $159 = $AI.iterator_op(_b),
              $160 = $159.next();
            if (!$160.done)
              for (var $162 = 0; !$160.done; $160 = $159.next(), $162++) {
                $161 = $160.value;
                yield($161);;;
              }
          }
        }();
      }
      if (($177 = ($.isArray(_b)))) {
        _b = $AI.clone_op(_b);
        return function*(p) {
          {
            var $165 = $AI.iterator_op(_a),
              $166 = $165.next();
            if (!$166.done)
              for (var $168 = 0; !$166.done; $166 = $165.next(), $168++) {
                $167 = $166.value;
                yield($167);;;
              }
            var $175 = _b;
            if (undefined === $175) $175 = [];
            var $172 = $175.length;
            if ($172) {
              var $173, $174 = 0;
              for (; $174 < $172; $174++) {
                $173 = $175[$174];
                yield($173);;
              }
            }
          }
        }();
      }
      return function*(p) {
        {
          var $178 = $AI.iterator_op(_a),
            $179 = $178.next();
          if (!$179.done)
            for (var $181 = 0; !$179.done; $179 = $178.next(), $181++) {
              $180 = $179.value;
              yield($180);;;
            }
          yield(_b);
        }
      }();
    }
    if (($184 = ((!($.isArray(_a)))))) {
      _a = [_a];
    } else if (!(_inplace)) {
      _a = $AI.clone_op(_a);
    }
    if (($190 = ($.mustIterate(_b)))) {
      var $185 = $AI.iterator_op(_b),
        $186 = $185.next();
      if (!$186.done)
        for (var $188 = 0; !$186.done; $186 = $185.next(), $188++) {
          $187 = $186.value;
          _a.push($187);;;
        }
    } else if (($191 = ($.isArray(_b)))) {
      _a = _a.concat(_b);
    } else {
      _a.push(_b);
    }
    return _a;
  }
};
var $25g = prototype['map_op'];
prototype['map_op'] = function(p, _fn) {
  var $_d, $_c, $214, $213, $212, $211, $210, $207, $206, $205, $204, $201, $200, $199, $198, $197, _r, $193, $192, _a = p,
    $ = this; {
    if (($193 = ((undefined === _a)))) {
      return _a;;
    }
    if (($201 = ($.isArray(_a)))) {
      _r = [];
      var $199 = _a;
      if (undefined === $199) $199 = [];
      var $196 = $199.length;
      if ($196) {
        var $197, $198 = 0;
        for (; $198 < $196; $198++) {
          $197 = $199[$198];
          _r[$198] = _fn($197, $198);;
        }
      }
      return _r;
    }
    if (($207 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $202 = $AI.iterator_op(_a),
            $203 = $202.next();
          if (!$203.done)
            for (var $205 = 0; !$203.done; $203 = $202.next(), $205++) {
              $204 = $203.value;
              yield(_fn($204, $205));;;
            }
        }
      }();
    }
    if (($214 = ($.isObject(_a)))) {
      _r = {};
      var $212 = _a;
      if (undefined === $212) $212 = [];
      for (var $211 in $212) {
        var $210 = $212[$211];
        _r[$211] = _fn($210, $211);;
      }
      return _r;
    }
    return _fn(_a, undefined);
  }
};
var $26g = prototype['filter_op'];
prototype['filter_op'] = function(p, _fn) {
  var $_d, $_c, $240, $239, $238, $237, $236, $233, $232, $231, $230, $229, $226, $225, $224, $223, $222, $221, $217, _r, $216, $215, _a = p,
    $ = this; {
    if (($216 = ((undefined === _a)))) {
      return _a;;
    }
    if (($225 = ($.isArray(_a)))) {
      _r = [];
      var $223 = _a;
      if (undefined === $223) $223 = [];
      var $220 = $223.length;
      if ($220) {
        var $221, $222 = 0;
        for (; $222 < $220; $222++) {
          $221 = $223[$222];
          if (($217 = (_fn($221, $222)))) {
            _r.push($221);;
          };
        }
      }
      return _r;
    }
    if (($232 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          var $227 = $AI.iterator_op(_a),
            $228 = $227.next();
          if (!$228.done)
            for (var $230 = 0; !$228.done; $228 = $227.next(), $230++) {
              $229 = $228.value;
              if (($226 = (_fn($229, $230)))) {
                yield($229);;
              };;
            }
        }
      }();
    }
    if (($240 = ($.isObject(_a)))) {
      _r = {};
      var $238 = _a;
      if (undefined === $238) $238 = [];
      for (var $237 in $238) {
        var $236 = $238[$237];
        if (($233 = (_fn($236, $237)))) {
          _r[$237] = $236;;
        };
      }
      return _r;
    }
    return ((_fn(_a, undefined)) ? (_a) : (undefined));
  }
};
var $27g = prototype['reduce_op'];
prototype['reduce_op'] = function(p, _fn, _accum) {
  var $_d, $_c, $255, $254, $253, $252, $251, $248, _init, $247, $246, _step, $245, $244, $243, _k, _l, $242, $241, _a = p,
    $ = this; {
    if (($242 = ((undefined === _a)))) {
      return _a;;
    }
    if (($245 = ($.isArray(_a)))) {
      _l = _a.length;
      if (!(_l)) {
        return _accum;;
      }
      _k = 0;
      if (($243 = ((undefined === _accum)))) {
        _accum = _a[_k];
        _k++;
      }
      var $244;
      while ($244 = ((_k < _l))) {
        _accum = _fn(_accum, _a[_k], _k);
        _k++;
      }
      return _accum;
    }
    if (($247 = ($.mustIterate(_a)))) {
      return function*(p) {
        {
          _a = $AI.iterate_op(_a);
          _step = _a.next();
          if (!(_step.done)) {
            _k = 0;
            if (($246 = ((undefined === _accum)))) {
              _accum = _step.value;
              _step = _a.next();
              _k++;
            }
            while (!(_step.done)) {
              _accum = _fn(_accum, _step.value, _k);
              _step = _a.next();
              _k++;
            }
          }
          yield(_accum);
        }
      }();
    }
    if (($255 = ($.isObject(_a)))) {
      _init = (undefined === _accum);
      var $253 = _a;
      if (undefined === $253) $253 = [];
      for (var $252 in $253) {
        var $251 = $253[$252];
        if (($248 = (_init))) {
          _accum = $251;
          _init = false;
        } else {
          _accum = _fn(_accum, $251, $252);
        }
      }
      return _accum;
    }
    return $.reduce_op([_a], _fn, _accum);
  }
};
var $28g = prototype['slice_op'];
prototype['slice_op'] = function(p, _st, _ct) {
  var $_d, $_c, $290, $289, $287, $286, _v, _cache, $285, $284, $283, $282, $281, $280, $279, _keep, _only, _size, _crop, _skip, $278, $277, $276, $275, $274, $273, $272, $271, $270, _len, $269, $268, $267, $266, $263, $262, $261, $260, $259, $258, $257, $256, _a = p,
    $ = this; {
    if (($257 = ((undefined === _a)))) {
      return _a;;
    }
    if (($259 = ((_ct === 0)))) {
      if (($258 = ($.mustIterate(_a)))) {
        return function*(p) {
          {;;
          }
        };
      } else {
        return [];
      }
    }
    if (!(($.mustIterate(_a) || $.isArray(_a)))) {
      _a = [_a];
    }
    if (($261 = (((_ct === undefined) && ((_st === undefined) || (_st === 0)))))) {
      if (($260 = ($.isArray(_a)))) {
        return $AI.clone_op(_a);
      } else {
        return _a;
      }
    }
    if (($269 = (((_ct > 0) && ((_st === undefined) || (_st === 0)))))) {
      if (($262 = ($.isArray(_a)))) {
        return _a.slice(0, _ct);
      } else {
        return function*(p) {
          {
            var $264 = $AI.iterator_op(_a),
              $265 = $264.next();
            if (!$265.done)
              for (var $267 = 0; !$265.done; $265 = $264.next(), $267++) {
                $266 = $265.value;
                if (($263 = (($267 < _ct)))) {
                  yield($266);;
                } else {
                  break;;
                };
              }
          }
        }();
      }
    }
    if (($278 = ($.isArray(_a)))) {
      _len = _a.length;
      if (($270 = (((undefined === _st) && (_ct < 0))))) {
        return _a.slice((_len + _ct), _len);
      } else if (($271 = (((0 === _st) && (_ct < 0))))) {
        return _a.slice(0, (_len + _ct));
      } else if (($274 = ((_st > 0)))) {
        if (($272 = ((_ct < 0)))) {
          return _a.slice(_st, (_len + _ct));
        } else if (($273 = ((_ct > 0)))) {
          return _a.slice(_st, (_st + _ct));
        } else {
          return _a.slice(_st, _len);
        }
      } else if (($277 = ((_st < 0)))) {
        if (($275 = ((_ct < 0)))) {
          return _a.slice((_len + _st), (_len + _ct));
        } else if (($276 = ((_ct > 0)))) {
          return _a.slice((_len + _st), (_len + (_st + _ct)));
        } else {
          return _a.slice((_len + _st), _len);
        }
      }
      throw new Error('Impossible code path in slice_op');
    }
    _skip = 0;
    _crop = 0;
    _size = 0;
    _only = undefined;
    _keep = true;
    if (($279 = (((undefined === _st) && (_ct < 0))))) {
      _keep = false;
      _size = (0 - (_ct));
    } else if (($282 = ((_st < 0)))) {
      _keep = false;
      _size = (0 - (_st));
      if (($280 = ((_ct < 0)))) {
        _crop = (0 - (_ct));
      } else if (($281 = ((_ct > 0)))) {
        _crop = (_size - _ct);
      }
    } else if (($285 = ((_st > 0)))) {
      _skip = _st;
      if (($283 = ((_ct < 0)))) {
        _size = (0 - (_ct));
        _crop = (0 - (_ct));
      } else if (($284 = ((_ct > 0)))) {
        _only = _ct;
      }
    } else {
      _size = (0 - (_ct));
      _crop = (0 - (_ct));
    }
    _a = $AI.iterate_op(_a);
    return function*(p) {
      {
        _cache = [];
        _v = _a.next();
        while (!(((_skip <= 0) || _v.done))) {
          _skip--;
          _v = _a.next();
        }
        while (!(_v.done)) {
          _cache.push(_v.value);
          if (($289 = ((_cache.length > _size)))) {
            var $288 = _cache.shift();
            if (($287 = (_keep))) {
              if (($286 = ((_only <= 0)))) {
                return;;
              }
              _only--;
              yield($288);
            }
          }
          _v = _a.next();
        }
        var $290;
        while ($290 = ((_cache.length > _crop))) {
          yield(_cache.shift());
        }
      }
    }();
  }
};
var $29g = prototype['element_op'];
prototype['element_op'] = function(p, _index) {
  var $295, $294, $293, $292, $291, _a = p,
    $ = this; {
    if (($292 = ((undefined === _a)))) {
      return _a;;
    }
    if (($293 = ($.isArray(_a)))) {
      return _a[_index];
    }
    if (($294 = ($.mustIterate(_a)))) {
      return $.slice_op(_a, _index, 1).next().value;
    }
    if (($295 = (((_index === 0) || (_index === (0 - (1))))))) {
      return _a;
    }
    return undefined;
  }
};
var $30g = prototype['clone_op'];
prototype['clone_op'] = function(p) {
  var $304, $303, $302, $301, $300, _b, $297, $296, _a = p,
    $ = this; {
    if (($297 = ($.isArray(_a)))) {
      return _a.slice(0);
    }
    if (($304 = ($.isObject(_a)))) {
      _b = {};
      var $302 = _a;
      if (undefined === $302) $302 = [];
      for (var $301 in $302) {
        var $300 = $302[$301];
        if (!((undefined === $300))) {
          _b[$301] = $300;
        }
      }
      return _b;
    }
    return _a;
  }
};
var $31g = prototype['overlay_op'];
prototype['overlay_op'] = function(p, _r) {
  var $_d, $_c, $_b, _i, $333, _vr, _vl, $332, $331, $330, $329, $325, $324, $323, $322, $321, $320, $317, $316, $315, $314, $313, $312, _v, $308, $307, $306, $305, _l = p,
    $ = this; {
    if (($306 = ((undefined === _l)))) {
      _l = {};
    }
    if (($307 = ((!($.isMergable(_l)))))) {
      throw new Error('SAI: Attempt to OVERLAY onto something that\'s not a collection/iterable.');
    }
    if (($308 = ((!($.isMergable(_r)))))) {
      throw new Error('SAI: Attempt to OVERLAY with something that\'s not a collection/iterable.');
    }
    if (!($.mustIterate(_l))) {
      _l = $AI.clone_op(_l);
      if (($316 = ($.mustIterate(_r)))) {
        return function*(p) {
          {
            _r = $AI.iterate_op(_r);
            _v = _r.next();
            var $314 = _l;
            if (undefined === $314) $314 = [];
            var $311 = $314.length;
            if ($311) {
              var $312, $313 = 0;
              for (; $313 < $311; $313++) {
                $312 = $314[$313];
                if (!(_v.done)) {
                  yield(((undefined !== ($_b = _v.value)) ? $_b : $312));
                  _v = _r.next();
                } else {
                  yield($312);
                }
              }
            }
          }
        }();
      }
      if (($324 = ($.isObject(_r)))) {
        var $322 = _r;
        if (undefined === $322) $322 = [];
        for (var $321 in $322) {
          var $320 = $322[$321];
          if (($317 = (($320 !== undefined)))) {
            _l[$321] = $320;
          }
        }
      } else {
        var $331 = _r;
        if (undefined === $331) $331 = [];
        var $328 = $331.length;
        if ($328) {
          var $329, $330 = 0;
          for (; $330 < $328; $330++) {
            $329 = $331[$330];
            if (($325 = (($329 !== undefined)))) {
              _l[$330] = $329;
            }
          }
        }
      }
      return _l;
    }
    _l = $AI.iterate_op(_l);
    if (($333 = ($.mustIterate(_r)))) {
      _r = $AI.iterate_op(_r);
      return function*(p) {
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
      }();
    }
    _r = $AI.clone_op(_r);
    return function*(p) {
      {
        _i = 0;
        _v = _l.next();
        while (!(_v.done)) {
          yield((((_r[_i] === undefined)) ? (_v.value) : (_r[_i])));
          _i++;
          _v = _l.next();
        }
      }
    }();
  }
};
var $32g = prototype['select_op'];
prototype['select_op'] = function(p, _manifest) {
  var $_d, $_c, $402, $401, $400, $399, $398, $395, $394, $393, $392, $391, $387, $386, $385, $384, $381, $380, $379, $378, $377, $374, $373, _i, $372, $371, $370, $369, $368, $364, $363, $362, $361, $360, $357, _buffer, _l, $356, $355, $354, $353, $352, $349, $348, $347, $346, $343, $342, $341, $340, $339, _result, $335, $334, _src = p,
    $ = this; {
    if (!($.isMergable(_src))) {
      throw new Error('SAI: Left argument to SELECT must be list/traits/iterable.');
    }
    if (!($.isMergable(_manifest))) {
      if (($335 = ((undefined === _manifest)))) {
        return _manifest;;
      }
      _manifest = [_manifest];
    }
    if (($356 = ($.isArray(_src)))) {
      if (($343 = ($.isArray(_manifest)))) {
        _result = [];
        var $341 = _manifest;
        if (undefined === $341) $341 = [];
        var $338 = $341.length;
        if ($338) {
          var $339, $340 = 0;
          for (; $340 < $338; $340++) {
            $339 = $341[$340];
            _result.push(_src[$339]);
          }
        }
        return _result;
      } else if (($349 = ($.mustIterate(_manifest)))) {
        _src = $AI.clone_op(_src);
        return function*(p) {
          {
            var $344 = $AI.iterator_op(_manifest),
              $345 = $344.next();
            if (!$345.done)
              for (var $347 = 0; !$345.done; $345 = $344.next(), $347++) {
                $346 = $345.value;
                yield(_src[$346]);;
              }
          }
        }();
      }
      _result = [];
      var $354 = _manifest;
      if (undefined === $354) $354 = [];
      for (var $353 in $354) {
        var $352 = $354[$353];
        _result.push(_src[$353]);
      }
      return _result;
    } else if (($380 = ($.mustIterate(_src)))) {
      if (($363 = ($.mustIterate(_manifest)))) {
        _src = $AI.iterate_op(_src);
        return function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $358 = $AI.iterator_op(_manifest),
              $359 = $358.next();
            if (!$359.done)
              for (var $361 = 0; !$359.done; $359 = $358.next(), $361++) {
                $360 = $359.value;
                var $357;
                while ($357 = (((!(_l.done)) && (_buffer.length <= $360)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$360]);;
              }
          }
        }();
      }
      if (($372 = ($.isArray(_manifest)))) {
        _manifest = $AI.clone_op(_manifest);
        _src = $AI.iterate_op(_src);
        return function*(p) {
          {
            _l = _src.next();
            _buffer = [];
            var $370 = _manifest;
            if (undefined === $370) $370 = [];
            var $367 = $370.length;
            if ($367) {
              var $368, $369 = 0;
              for (; $369 < $367; $369++) {
                $368 = $370[$369];
                var $364;
                while ($364 = (((!(_l.done)) && (_buffer.length <= $368)))) {
                  _buffer.push(_l.value);
                  _l = _src.next();
                }
                yield(_buffer[$368]);
              }
            }
          }
        }();
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
      return function*(p) {
        {
          _i = 0;
          var $375 = $AI.iterator_op(_src),
            $376 = $375.next();
          if (!$376.done)
            for (var $378 = 0; !$376.done; $376 = $375.next(), $378++) {
              $377 = $376.value;
              if (($374 = (($378 === _manifest[_i])))) {
                yield($377);
                _i++;
                if (($373 = ((_i >= _manifest.length)))) {
                  return;;
                }
              };
            }
        }
      }();
    }
    if (($387 = ($.mustIterate(_manifest)))) {
      _src = $AI.clone_op(_src);
      return function*(p) {
        {
          var $382 = $AI.iterator_op(_manifest),
            $383 = $382.next();
          if (!$383.done)
            for (var $385 = 0; !$383.done; $383 = $382.next(), $385++) {
              $384 = $383.value;
              if (($381 = (($384 !== undefined)))) {
                yield(_src[$384]);
              };
            }
        }
      }();
    }
    _result = {};
    if (($395 = ($.isArray(_manifest)))) {
      var $393 = _manifest;
      if (undefined === $393) $393 = [];
      var $390 = $393.length;
      if ($390) {
        var $391, $392 = 0;
        for (; $392 < $390; $392++) {
          $391 = $393[$392];
          _result[$391] = _src[$391];
        }
      }
      return _result;
    }
    if (($402 = ($.isObject(_manifest)))) {
      var $400 = _manifest;
      if (undefined === $400) $400 = [];
      for (var $399 in $400) {
        var $398 = $400[$399];
        _result[$399] = _src[$399];
      }
    } else {
      _result[_manifest] = _src[_manifest];
    }
    return _result;
  }
};
var $33g = prototype['update_op'];
prototype['update_op'] = function(p, _manifest) {
  var $427, $426, $425, $424, $421, $420, $419, $418, $417, $416, $412, $411, $410, $409, $408, $405, $404, $403, _dest = p,
    $ = this; {
    if (($404 = ((undefined === _dest)))) {
      _dest = {};
    }
    if (!(($.isArray(_dest) || $.isObject(_dest)))) {
      throw new Error('Attempt to UPDATE into something that\'s not a list or traits.');
    }
    if (!($.isMergable(_manifest))) {
      throw new Error('Attempt to UPDATE from something that\'s not a list or traits.');
    }
    if (($411 = ($.mustIterate(_manifest)))) {
      var $406 = $AI.iterator_op(_manifest),
        $407 = $406.next();
      if (!$407.done)
        for (var $409 = 0; !$407.done; $407 = $406.next(), $409++) {
          $408 = $407.value;
          if (($405 = (($408 !== undefined)))) {
            _dest[$409] = $408;;
          };
        }
    } else if (($420 = ($.isArray(_manifest)))) {
      var $418 = _manifest;
      if (undefined === $418) $418 = [];
      var $415 = $418.length;
      if ($415) {
        var $416, $417 = 0;
        for (; $417 < $415; $417++) {
          $416 = $418[$417];
          if (($412 = (($416 !== undefined)))) {
            _dest[$417] = $416;;
          }
        }
      }
    } else {
      var $426 = _manifest;
      if (undefined === $426) $426 = [];
      for (var $425 in $426) {
        var $424 = $426[$425];
        if (($421 = (($424 !== undefined)))) {
          _dest[$425] = $424;;
        }
      }
    }
    return _dest;
  }
};
var $34g = prototype['delete_op'];
prototype['delete_op'] = function(p, _manifest) {
  var $_d, $_c, $460, $459, $456, $455, $451, $450, $446, $445, $444, $443, $442, $439, $438, $434, $433, _deletel, _ignore, _deleter, _index, _splicer, $429, $428, _dest = p,
    $ = this; {
    if (($429 = ($.mustIterate(_dest)))) {
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
    if (($446 = ($.isArray(_dest)))) {
      if (!($.isMergable(_manifest))) {
        _splicer(_manifest);
      } else if (($434 = ($.isArray(_manifest)))) {
        var $431 = _manifest;
        if (undefined === $431) $431 = [];
        var $430 = $431.length;
        for (var $432 = 0; $432 < $430; $432++) {
          _splicer($431[$432], $432, $431)
        };
      } else if (($439 = ($.mustIterate(_manifest)))) {
        var $435 = $AI.iterator_op(_manifest),
          $436 = $435.next(),
          $437 = 0;
        while (!$436.done) {
          _splicer($436.value, $437);
          $436 = $435.next();
          $437++;
        }
      } else {
        var $444 = _manifest;
        if (undefined === $444) $444 = [];
        for (var $443 in $444) {
          var $442 = $444[$443];
          let _index = parseInt($443);
          if (!(isNaN(_index))) {
            _dest.splice(_index, 1);
          }
        }
      }
    } else {
      if (!($.isMergable(_manifest))) {
        delete _dest[_manifest];
      } else if (($451 = ($.isArray(_manifest)))) {
        var $448 = _manifest;
        if (undefined === $448) $448 = [];
        var $447 = $448.length;
        for (var $449 = 0; $449 < $447; $449++) {
          _deletel($448[$449], $449, $448)
        };
      } else if (($456 = ($.mustIterate(_manifest)))) {
        var $452 = $AI.iterator_op(_manifest),
          $453 = $452.next(),
          $454 = 0;
        while (!$453.done) {
          _deletel($453.value, $454);
          $453 = $452.next();
          $454++;
        }
      } else if (($460 = ($.isObject(_manifest)))) {
        var $457 = _manifest;
        if (undefined === $457) $457 = [];
        for (var $458 in $457) _deleter($457[$458], $458, $457);
      } else {
        delete _dest[_manifest];
      }
    }
    return _dest;
  }
};
var $35g = prototype['deepFreeze'];
prototype['deepFreeze'] = function(p) {
  var $_d, $_c, $470, $469, $468, $467, $464, $463, $462, $461, _o = p,
    $ = this; {
    Object.freeze(_o);
    var $469 = _o;
    if (undefined === $469) $469 = [];
    for (var $468 in $469) {
      var $467 = $469[$468];
      if (($462 = ((!(_o.hasOwnProperty($468)))))) {
        continue;;
      }
      if (($463 = (('object' !== typeof($467))))) {
        continue;;
      }
      if (($464 = (Object.isFrozen($467)))) {
        continue;;
      }
      $.deepFreeze($467);
    }
  }
};
var $36g = prototype['xor_op'];
prototype['xor_op'] = function(p, _b) {
  var $471, _a = p,
    $ = this; {
    return ((_a) ? (((_b) ? (false) : (_a))) : (((_b) ? (_b) : (false))));
  }
};
var $37g = prototype['min_op'];
prototype['min_op'] = function(p, _b) {
  var $472, _a = p,
    $ = this; {
    return (((_a < _b)) ? (_a) : (_b));
  }
};
var $38g = prototype['max_op'];
prototype['max_op'] = function(p, _b) {
  var $473, _a = p,
    $ = this; {
    return (((_a > _b)) ? (_a) : (_b));
  }
};
var $39g = prototype['compare_op'];
prototype['compare_op'] = function(p, _b) {
  var $476, $475, $474, _a = p,
    $ = this; {
    if (($475 = ((_a < _b)))) {
      return (0 - (1));;
    }
    if (($476 = ((_a > _b)))) {
      return 1;;
    }
    return 0;
  }
};
var $40g = prototype['keys_op'];
prototype['keys_op'] = function(p) {
  var $_d, $_c, $495, $494, $493, $492, $491, $488, $487, $486, $485, $482, $481, $480, $479, _result, $477, _a = p,
    $ = this; {
    _result = [];
    if (($482 = ($.isArray(_a)))) {
      var $479 = 0,
        $478 = _a.length;
      for (; $479 < $478; $479 += 1) {
        _result.push($479);
      }
    } else if (($488 = ($.mustIterate(_a)))) {
      var $483 = $AI.iterator_op(_a),
        $484 = $483.next();
      if (!$484.done)
        for (var $486 = 0; !$484.done; $484 = $483.next(), $486++) {
          $485 = $484.value;
          _result.push($486);;
        }
    } else if (($495 = ($.isObject(_a)))) {
      var $493 = _a;
      if (undefined === $493) $493 = [];
      for (var $492 in $493) {
        var $491 = $493[$492];
        _result.push($492);
      }
    }
    return _result;
  }
};
var $41g = prototype['count_op'];
prototype['count_op'] = function(p) {
  var $511, $510, $509, $508, $507, $506, $503, $502, $501, $500, _i, $497, $496, _a = p,
    $ = this; {
    if (($497 = ($.isArray(_a)))) {
      return _a.length;
    }
    _i = 0;
    if (($503 = ($.mustIterate(_a)))) {
      var $498 = $AI.iterator_op(_a),
        $499 = $498.next();
      if (!$499.done)
        for (var $501 = 0; !$499.done; $499 = $498.next(), $501++) {
          $500 = $499.value;
          _i++;;
        }
      return _i;
    }
    if (($510 = ($.isObject(_a)))) {
      var $508 = _a;
      if (undefined === $508) $508 = [];
      for (var $507 in $508) {
        var $506 = $508[$507];
        _i++;
      }
      return _i;
    }
    if (($511 = ((_a === undefined)))) {
      return 0;
    }
    return 1;
  }
};
var $42g = prototype['values_op'];
prototype['values_op'] = function(p) {
  var $_d, $_c, $522, $521, $520, $519, $518, $517, _result, $514, $513, $512, _a = p,
    $ = this; {
    if (($513 = ($.isArray(_a)))) {
      return $AI.clone_op(_a);
    }
    if (($514 = ($.mustIterate(_a)))) {
      return $.collect_op(_a);
    }
    _result = [];
    if (($521 = ($.isObject(_a)))) {
      var $519 = _a;
      if (undefined === $519) $519 = [];
      for (var $518 in $519) {
        var $517 = $519[$518];
        _result.push($517);
      }
      return _result;
    }
    if (($522 = ((undefined !== _a)))) {
      _result.push(_a);
    }
    return _result;
  }
};
var $43g = prototype['newerror'];
prototype['newerror'] = function(p, _file, _parameters) {
  var $529, $528, $527, $526, _e, $523, _line = p,
    $ = this; {
    _e = new Error(_parameters.message, _file, _line);
    var $528 = _parameters;
    if (undefined === $528) $528 = [];
    for (var $527 in $528) {
      var $526 = $528[$527];
      _e[$527] = $526;
    }
    return _e;
  }
};
var $44g = prototype['number_op'];
prototype['number_op'] = function(p) {
  var _n, $530, _x = p,
    $ = this; {
    _n = parseFloat(_x);
    return ((isNaN(_n)) ? (0) : (_n));
  }
};
var $45g = prototype['expects_op'];
prototype['expects_op'] = function(p, _prototype) {
  var $_d, $_c, $541, $540, $539, $536, $535, $534, _p, $533, $532, _type, _name, _param, _tester, _result, $531, _params = p,
    $ = this; {
    _result = [];
    _tester = function(p, _name, _type) {
      var _param = p; {
        if (($532 = ((_type === typeof(_param))))) {;
        } else if (($533 = ((_param.isof && _param.isof[_type])))) {;
        } else {
          if (($534 = (_p.isa))) {
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
    var $540 = _prototype;
    if (undefined === $540) $540 = [];
    for (var $539 in $540) {
      var _type = $540[$539];
      if (($535 = (($539 === '_root')))) {
        _tester(_params, 'Root', _type);
      } else if (!(_params[$539])) {
        _result.push({
          trait: $539,
          'expects': _type,
          found: 'undefined'
        });
      } else if (($536 = ((_type !== true)))) {
        _tester(_params[$539], $539, _type);
      }
    }
    return _result;
  }
};
var $46g = prototype['expectsThrow'];
prototype['expectsThrow'] = function(p, _prototype, _name) {
  var $_d, $_c, $548, $547, $546, $545, _err, _x, $542, _params = p,
    $ = this; {
    _x = $.expects_op(_params, _prototype);
    if (!(_x.length)) {
      return;;
    }
    _err = [];
    var $547 = _x;
    if (undefined === $547) $547 = [];
    for (var $546 in $547) {
      var $545 = $547[$546];
      _err.push('' + $545.trait + ' should be ' + $545.expects + ' but is instead ' + $545.found);
    }
    throw new Error('SAI: parameter exception in ' + _name + '\n' + _err.join('\n'));
  }
};
var $47g = prototype['finalizePrototype'];
prototype['finalizePrototype'] = function(p) {
  var $_d, $_c, $571, $570, _obj, $569, $568, $567, $566, $565, $562, $561, $560, $559, $558, $555, $554, $553, $552, $549, _proto = p,
    $ = this; {
    var $554 = _proto.__tobelocked;
    if (undefined === $554) $554 = [];
    for (var $553 in $554) {
      var $552 = $554[$553];
      Object.defineProperty(_proto, $552, {
        configurable: false
      });
    }
    delete _proto.__tobelocked;
    var $560 = _proto.__tobefrozen;
    if (undefined === $560) $560 = [];
    for (var $559 in $560) {
      var $558 = $560[$559];
      $.deepFreeze(_proto[$558]);
    }
    delete _proto.__tobefrozen;
    if (($569 = (_proto.__unverified))) {
      var $567 = _proto.__contracts;
      if (undefined === $567) $567 = [];
      for (var $566 in $567) {
        var $565 = $567[$566];
        if (($562 = ((undefined === _proto[$565])))) {
          throw new Error('SAI: Contractually required trait ' + $565 + ' does not exist in object ' + _proto.isa + '.');
        }
      }
      delete _proto.__unverified;
      delete _proto.__contracts;
    }
    _proto.constructor = function(p) {
      {
        _obj = Object.create(_proto);
        if (($570 = (_obj.Constructor))) {
          _obj.Constructor();;
        }
        if (($571 = (_obj.Instantiate))) {
          _obj.Instantiate.apply(_obj, arguments);;
        }
        return _obj;
      }
    };
  }
};
var $48g = prototype['create_op_base'];
prototype['create_op_base'] = function(p, _parameters) {
  var $_d, $_c, $574, $573, _obj, _mod, _src, _fn, _proto, $572, _name = p,
    $ = this; {
    _proto = $._protocache[_name];
    if (!(_proto)) {
      _fn = (_name + '.js');
      _src = _FS.readFileSync(_fn, 'utf8');
      _src = '(function(exports, require, module, __filename, __dirname) {' + _src + '});';
      _mod = eval(_src);
      _proto = _mod({}, require, {}, _fn, __dirname);
      $._protocache[_name] = _proto;
    }
    if (!(_proto)) {
      throw new Error('SAI.Create: Do not know how to create SAI object ' + _name + '.');
    }
    _obj = Object.create(_proto);
    if (($573 = (_obj.Constructor))) {
      _obj.Constructor();;
    }
    if (($574 = (_obj.Instantiate))) {
      _obj.Instantiate.apply(_obj, _parameters);;
    }
    return _obj;
  }
};
var $49g = prototype['singleton_op'];
prototype['singleton_op'] = function(p, _parameters) {
  var $_d, $_c, $575, _name = p,
    $ = this; {
    if (undefined === $._singletoncache[_name]) $._singletoncache[_name] = $.create_op(_name, _parameters);
    return $._singletoncache[_name];
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
