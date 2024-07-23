# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ylhc_sub_form(models.Model):
    _name = 'ylhc_sub_form.ylhc_sub_form'
    _description = 'ylhc_sub_form.ylhc_sub_form'

    name = fields.Char()
    test2 = fields.Char(string='test2')
    test_field = fields.Char(string='test_field')
    value = fields.Integer()
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text()

    @api.depends('value')
    def _value_pc(self):
        for record in self:
            record.value2 = float(record.value) / 100

    def test(self):
        """
        test
        """
        pass

