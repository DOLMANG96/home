package com.fornula.domain.member.join;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.RequiredArgsConstructor;


@Controller
@RequiredArgsConstructor
public class MemberJoinController {

	private MemberJoinService memberJoinService;

	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String getJoin() {
		return "join";
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String postJoin(@ModelAttribute MemberDTO memberDTO, Model model){
		
		
	memberJoinService.join(memberDTO);

		return "redirect:/main";
	}
	
	
	
}
